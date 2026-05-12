import type { APIRoute } from "astro";
import sgMail from "@sendgrid/mail";

export const prerender = false;

const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY;
const SUPPORT_EMAIL = "info@acepropertieskc.com";
const NOTIFICATION_EMAIL = "aaron@aprkc.com";

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY is not configured; form submissions will fail.");
}

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, private",
    },
  });
};

function respondJson(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, private",
    },
  });
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readString(body: Record<string, unknown>, key: string, fallback = ""): string {
  return isNonEmptyString(body[key]) ? body[key].trim() : fallback;
}

const MIN_SUBMIT_MS = 2500;
const MAX_BODY_BYTES = 12_000;

export const POST: APIRoute = async ({ request }) => {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return respondJson({ ok: false, error: "request_too_large" }, 413);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch (err) {
    console.error("Send email error:", err);
    return respondJson({ error: "Invalid request" }, 400);
  }

  if (!body || typeof body !== "object") {
    return respondJson({ error: "Invalid request" }, 400);
  }

  const fieldErrors: Record<string, string> = {};

  const website = isNonEmptyString(body.website) ? body.website.trim() : "";
  if (website) {
    return respondJson(
      {
        ok: false,
        error: "validation_error",
        fields: { form: "Unable to process submission." },
      },
      422,
    );
  }

  const startedRaw = body.form_started_at;
  let startedAt = Number.NaN;
  if (typeof startedRaw === "string" && startedRaw.trim()) {
    startedAt = Number(startedRaw);
  } else if (typeof startedRaw === "number") {
    startedAt = startedRaw;
  }

  if (!Number.isFinite(startedAt)) {
    fieldErrors.form_started_at = "Please try submitting again.";
  } else {
    const elapsed = Date.now() - startedAt;
    if (elapsed < MIN_SUBMIT_MS) {
      return respondJson({ ok: false, error: "rate_limited" }, 429);
    }
  }

  const address = readString(body, "address");
  if (!address) {
    fieldErrors.address = "Address is required.";
  }

  const consentValue = body.consent;
  const consentAccepted = consentValue === true || consentValue === "true";
  if (!consentAccepted) {
    fieldErrors.consent = "Consent is required.";
  }

  const phone = readString(body, "phone");
  const email = readString(body, "email");
  if (!phone && !email) {
    fieldErrors.contact = "Provide a phone or email.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return respondJson(
      {
        ok: false,
        error: "validation_error",
        fields: fieldErrors,
      },
      422,
    );
  }

  const name = readString(body, "name", "Not provided");
  const situation = readString(body, "situation", "Not provided");
  const timeline = readString(body, "timeline", "Not provided");
  const notes = readString(body, "notes");
  const landingPage = readString(body, "landing_page", "Not captured");
  const referrer = readString(body, "referrer", "Direct or not captured");
  const utmSource = readString(body, "utm_source");
  const utmMedium = readString(body, "utm_medium");
  const utmCampaign = readString(body, "utm_campaign");
  const utmTerm = readString(body, "utm_term");
  const utmContent = readString(body, "utm_content");
  const gclid = readString(body, "gclid");
  const gbraid = readString(body, "gbraid");
  const wbraid = readString(body, "wbraid");

  if (!SENDGRID_API_KEY) {
    console.error("Cannot send email: missing SENDGRID_API_KEY.");
    return respondJson({ ok: false, error: "email_disabled" }, 500);
  }

  const submittedAt = new Date().toISOString();
  const subject = `New ACE Properties KC inquiry - ${address}`;
  const textLines = [
    `Address: ${address}`,
    `Name: ${name}`,
    `Phone: ${phone || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Situation: ${situation}`,
    `Timeline: ${timeline}`,
    `Notes: ${notes || "None"}`,
    `Landing page: ${landingPage}`,
    `Referrer: ${referrer}`,
    `UTM source: ${utmSource || "None"}`,
    `UTM medium: ${utmMedium || "None"}`,
    `UTM campaign: ${utmCampaign || "None"}`,
    `UTM term: ${utmTerm || "None"}`,
    `UTM content: ${utmContent || "None"}`,
    `GCLID: ${gclid || "None"}`,
    `GBRAID: ${gbraid || "None"}`,
    `WBRAID: ${wbraid || "None"}`,
    `Consent: ${consentAccepted ? "Granted" : "Pending"}`,
    `Submitted at: ${submittedAt}`,
  ];

  const htmlFields = [
    ["Address", address],
    ["Name", name],
    ["Phone", phone || "Not provided"],
    ["Email", email || "Not provided"],
    ["Situation", situation],
    ["Timeline", timeline],
    ["Notes", notes || "None"],
    ["Landing page", landingPage],
    ["Referrer", referrer],
    ["UTM source", utmSource || "None"],
    ["UTM medium", utmMedium || "None"],
    ["UTM campaign", utmCampaign || "None"],
    ["UTM term", utmTerm || "None"],
    ["UTM content", utmContent || "None"],
    ["GCLID", gclid || "None"],
    ["GBRAID", gbraid || "None"],
    ["WBRAID", wbraid || "None"],
    ["Consent", consentAccepted ? "Granted" : "Pending"],
    ["Submitted at", submittedAt],
  ];

  const message = {
    to: NOTIFICATION_EMAIL,
    from: SUPPORT_EMAIL,
    replyTo: SUPPORT_EMAIL,
    subject,
    text: textLines.join("\n"),
    html: `
      <p><strong>New property inquiry received.</strong></p>
      <ul>
        ${htmlFields
          .map(([label, value]) => `<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</li>`)
          .join("\n")}
      </ul>
    `,
  };

  try {
    await sgMail.send(message);
  } catch (error) {
    console.error("SendGrid error:", error);
    return respondJson({ ok: false, error: "email_failed" }, 502);
  }

  return respondJson({ ok: true }, 200);
};
