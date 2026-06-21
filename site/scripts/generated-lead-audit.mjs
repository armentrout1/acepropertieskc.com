import fs from "node:fs/promises";
import path from "node:path";

const root = path.join(process.cwd(), "dist", "client");

const REQUIRED_FORM_ROUTES = [
  "/",
  "/get-offer/",
  "/contact/",
  "/seller-stories/",
  "/sell-my-house-fast-kansas-city/",
  "/we-buy-houses-kansas-city/",
  "/cash-home-buyers-kansas-city/",
  "/sell-house-as-is-kansas-city/",
  "/behind-on-mortgage-kansas-city/",
  "/sell-inherited-house-kansas-city/",
  "/take-over-payments-kansas-city/",
  "/resources/cash-buyer-vs-real-estate-agent-kansas-city/",
];

const REQUIRED_HIDDEN_FIELDS = [
  "form_started_at",
  "page_context",
  "landing_page",
  "referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
];

const REQUIRED_TRACKING_STRINGS = [
  "new URLSearchParams(window.location.search)",
  "document.referrer",
  "form_start",
  "generate_lead",
  "form_validation_error",
  "form_submit_error",
  "window.__aceGoogleAdsConversions",
  "phone_click",
  "sms_click",
  "email_click",
  "window.fbq",
  "window.location.href = '/thank-you/'",
];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"));
  return match?.[1] ?? "";
}

function hasNamedField(html, name) {
  return new RegExp(`\\bname=["']${name}["']`, "i").test(html);
}

function getNamedFieldTag(html, name) {
  return html.match(new RegExp(`<[^>]+\\bname=["']${name}["'][^>]*>`, "i"))?.[0] ?? "";
}

function routeFromHtmlFile(file) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");

  if (relative === "index.html") return "/";
  if (relative === "404.html") return "/404/";

  return `/${relative.replace(/index\.html$/, "")}`;
}

function collectOfferForms(html) {
  return [...html.matchAll(/<form\b[^>]*data-offer-form[^>]*>[\s\S]*?<\/form>/gi)].map(
    (match) => match[0],
  );
}

function assertForm(route, form, index, issues) {
  const openingTag = form.match(/<form\b[^>]*>/i)?.[0] ?? "";
  const label = `${route} form #${index + 1}`;
  const formId = getAttribute(openingTag, "id");
  const method = getAttribute(openingTag, "method").toLowerCase();
  const action = getAttribute(openingTag, "action");

  if (!formId) {
    issues.forms.push(`${label} is missing an id.`);
  }

  if (method !== "post") {
    issues.forms.push(`${label} must submit with method="post".`);
  }

  if (action !== "/api/send-email/") {
    issues.forms.push(`${label} must submit to /api/send-email/.`);
  }

  if (!hasNamedField(form, "address")) {
    issues.forms.push(`${label} is missing the property address field.`);
  }

  const hasMiniContact = hasNamedField(form, "contact");
  const hasFullContact = hasNamedField(form, "phone") && hasNamedField(form, "email");
  if (!hasMiniContact && !hasFullContact) {
    issues.forms.push(`${label} is missing a phone/email contact path.`);
  }

  const consentField = getNamedFieldTag(form, "consent");
  if (!consentField) {
    issues.forms.push(`${label} is missing the consent field.`);
  }

  const consentType = getAttribute(consentField, "type").toLowerCase();
  const consentValue = getAttribute(consentField, "value").toLowerCase();
  const consentIsRequired = /\brequired\b/i.test(consentField);
  const consentIsImplied = consentType === "hidden" && consentValue === "true";
  if (consentField && !consentIsRequired && !consentIsImplied) {
    issues.forms.push(`${label} consent field must be required or hidden with value="true".`);
  }

  if (!hasNamedField(form, "website")) {
    issues.forms.push(`${label} is missing the honeypot website field.`);
  }

  for (const field of REQUIRED_HIDDEN_FIELDS) {
    if (!hasNamedField(form, field)) {
      issues.forms.push(`${label} is missing tracking field: ${field}.`);
    }
  }

  if (!/aria-live=["']polite["']/i.test(form)) {
    issues.forms.push(`${label} is missing the live validation/error region.`);
  }
}

async function main() {
  try {
    await fs.access(root);
  } catch {
    throw new Error("Missing dist/client. Run npm run build before npm run lead:audit.");
  }

  const files = await walk(root);
  const htmlFiles = files.filter((file) => file.endsWith(".html"));
  const searchableFiles = files.filter((file) => /\.(html|js)$/i.test(file));
  const issues = {
    requiredRoutes: [],
    forms: [],
    tracking: [],
  };
  const pagesWithForms = new Set();
  let formCount = 0;

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, "utf8");
    const route = routeFromHtmlFile(file);
    const forms = collectOfferForms(html);

    if (forms.length > 0) {
      pagesWithForms.add(route);
      formCount += forms.length;
      forms.forEach((form, index) => assertForm(route, form, index, issues));
    }
  }

  for (const route of REQUIRED_FORM_ROUTES) {
    if (!pagesWithForms.has(route)) {
      issues.requiredRoutes.push(`${route} is missing an offer form.`);
    }
  }

  const generatedText = (
    await Promise.all(searchableFiles.map((file) => fs.readFile(file, "utf8")))
  ).join("\n");

  for (const expected of REQUIRED_TRACKING_STRINGS) {
    if (!generatedText.includes(expected)) {
      issues.tracking.push(`Generated output is missing tracking hook: ${expected}`);
    }
  }

  const failedIssueGroups = Object.entries(issues).filter(([, value]) => value.length > 0);
  const summary = {
    htmlPages: htmlFiles.length,
    offerForms: formCount,
    pagesWithOfferForms: pagesWithForms.size,
    requiredFormRoutes: REQUIRED_FORM_ROUTES.length,
  };

  console.log("[generated-lead-audit] Summary:");
  console.log(JSON.stringify(summary, null, 2));

  if (failedIssueGroups.length > 0) {
    console.error("[generated-lead-audit] Issues:");
    console.error(JSON.stringify(issues, null, 2));
    process.exit(1);
  }

  console.log("[generated-lead-audit] All generated lead checks passed.");
}

main().catch((error) => {
  console.error(`[generated-lead-audit] ${error.message}`);
  process.exit(1);
});
