import fs from "node:fs/promises";
import path from "node:path";

const root = path.join(process.cwd(), "dist", "client");
const siteBase = "https://acepropertieskc.com";
const redirectTargets = new Map([
  ["/getoffer/", "/get-offer/"],
  ["/services/", "/solutions/"],
  ["/contact-local-home-buyers/", "/contact/"],
  ["/about-us/", "/about/"],
  ["/free-info/", "/resources/"],
  [
    "/resources/kansas-city-distressed-seller-zip-codes/",
    "/resources/kansas-city-as-is-seller-zip-codes/",
  ],
  [
    "/resources/kansas-city-quality-equity-seller-zip-codes/",
    "/resources/kansas-city-higher-equity-home-sale-options/",
  ],
]);

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
  return match?.[1] ?? null;
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function routeFromHtmlFile(file) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");

  if (relative === "index.html") return "/";
  if (relative === "404.html") return "/404/";

  return `/${relative.replace(/index\.html$/, "")}`;
}

function routeFromAssetFile(file) {
  return `/${path.relative(root, file).replaceAll(path.sep, "/")}`;
}

function normalizeInternalHref(href) {
  const original = href;
  const value = href.replace(/&amp;/g, "&").trim();

  if (!value || value.startsWith("#")) return null;
  if (/^(mailto|tel|sms|javascript|data):/i.test(value)) return null;

  let parsed;
  try {
    parsed = new URL(value, siteBase);
  } catch {
    return { kind: "bad", href: original, path: value };
  }

  if (parsed.origin !== siteBase) return null;

  let pathname = parsed.pathname;
  if (pathname !== "/" && !pathname.endsWith("/") && !pathname.includes(".")) {
    pathname += "/";
  }

  return { kind: "internal", href: original, path: pathname };
}

function routeFromSiteUrl(url) {
  try {
    const parsed = new URL(url);

    if (parsed.origin !== siteBase) return null;

    let pathname = parsed.pathname;
    if (pathname !== "/" && !pathname.endsWith("/") && !pathname.includes(".")) {
      pathname += "/";
    }

    return pathname;
  } catch {
    return null;
  }
}

function findDuplicateValues(records, field) {
  const groups = new Map();

  for (const record of records) {
    const value = record[field]?.replace(/\s+/g, " ").trim();
    if (!value) continue;

    const key = value.toLowerCase();
    if (!groups.has(key)) {
      groups.set(key, { value, routes: [] });
    }

    groups.get(key).routes.push(record.route);
  }

  return [...groups.values()]
    .filter((group) => group.routes.length > 1)
    .map((group) => ({
      value: group.value,
      routes: group.routes.sort(),
    }))
    .sort((a, b) => b.routes.length - a.routes.length);
}

function isNoIndex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

function recordSchemaTypes(html, schemaCounts, route, issues) {
  const scripts = html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );

  for (const script of scripts) {
    try {
      const parsed = JSON.parse(script[1].trim());
      const items = Array.isArray(parsed) ? parsed : [parsed];

      for (const item of items) {
        const type = Array.isArray(item["@type"]) ? item["@type"].join(",") : item["@type"];
        schemaCounts[type] = (schemaCounts[type] ?? 0) + 1;
      }
    } catch (error) {
      issues.badJson.push({ route, error: error.message });
    }
  }
}

async function main() {
  try {
    await fs.access(root);
  } catch {
    throw new Error("Missing dist/client. Run npm run build before npm run seo:audit.");
  }

  const files = await walk(root);
  const htmlFiles = files.filter((file) => file.endsWith(".html"));
  const xmlFiles = files.filter((file) => file.endsWith(".xml"));
  const issues = {
    badJson: [],
    canonicals: [],
    h1: [],
    titles: [],
    metaDescriptions: [],
    offerLinks: [],
    contactLinks: [],
    areaProof: [],
    internalLinks: [],
    duplicateTitles: [],
    duplicateMetaDescriptions: [],
    sitemapRoutes: [],
  };
  const schemaCounts = {};
  const validRoutes = new Set(
    htmlFiles.map((file) => routeFromHtmlFile(file)).concat(
      files
        .filter((file) => !file.endsWith(".html"))
        .map((file) => routeFromAssetFile(file)),
    ),
  );
  const indexablePageRecords = [];
  const noIndexRoutes = new Set();

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, "utf8");
    const route = routeFromHtmlFile(file);
    const noIndex = isNoIndex(html);
    const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    const descriptionTag = html.match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0] ?? "";
    const description = getAttribute(descriptionTag, "content");
    const canonicalTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0] ?? "";
    const canonical = getAttribute(canonicalTag, "href");
    const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => stripTags(match[1]));

    recordSchemaTypes(html, schemaCounts, route, issues);

    for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
      const link = normalizeInternalHref(match[1]);

      if (!link) continue;

      if (link.kind === "bad") {
        issues.internalLinks.push({ route, href: match[1], issue: "invalid href" });
        continue;
      }

      if (redirectTargets.has(link.path)) {
        issues.internalLinks.push({
          route,
          href: match[1],
          issue: `points to redirected URL; use ${redirectTargets.get(link.path)}`,
        });
        continue;
      }

      if (!validRoutes.has(link.path)) {
        issues.internalLinks.push({ route, href: match[1], issue: "missing generated route" });
      }
    }

    if (noIndex) {
      noIndexRoutes.add(route);
      continue;
    }

    indexablePageRecords.push({ route, title, description, canonical });

    if (!canonical || !canonical.startsWith(siteBase)) {
      issues.canonicals.push({ route, canonical });
    } else {
      const canonicalRoute = routeFromSiteUrl(canonical);

      if (canonicalRoute !== route) {
        issues.canonicals.push({ route, canonical, issue: "canonical route mismatch" });
      }
    }

    if (h1s.length !== 1) {
      issues.h1.push({ route, count: h1s.length });
    }

    if (title.length < 25 || title.length > 65) {
      issues.titles.push({ route, length: title.length, title });
    }

    if (!description || description.length > 160) {
      issues.metaDescriptions.push({
        route,
        length: description?.length ?? 0,
        description,
      });
    }

    if (!/href=["']\/get-offer\//.test(html)) {
      issues.offerLinks.push(route);
    }

    if (!/href=["']\/contact\//.test(html)) {
      issues.contactLinks.push(route);
    }

    if (/^\/areas\/[^/]+\/$/.test(route) && !/Property type/.test(html)) {
      issues.areaProof.push(route);
    }
  }

  const sitemapLocations = [];

  for (const file of xmlFiles) {
    const xml = await fs.readFile(file, "utf8");
    sitemapLocations.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]));
  }

  issues.duplicateTitles.push(...findDuplicateValues(indexablePageRecords, "title"));
  issues.duplicateMetaDescriptions.push(...findDuplicateValues(indexablePageRecords, "description"));

  const indexableRoutes = new Set(indexablePageRecords.map((record) => record.route));
  const sitemapPageRoutes = new Set(
    sitemapLocations
      .map((url) => routeFromSiteUrl(url))
      .filter(Boolean)
      .filter((route) => !route.endsWith(".xml")),
  );

  for (const route of [...indexableRoutes].sort()) {
    if (!sitemapPageRoutes.has(route)) {
      issues.sitemapRoutes.push({ route, issue: "indexable route missing from sitemap" });
    }
  }

  for (const route of [...sitemapPageRoutes].sort()) {
    if (noIndexRoutes.has(route)) {
      issues.sitemapRoutes.push({ route, issue: "noindex route appears in sitemap" });
    }

    if (!validRoutes.has(route)) {
      issues.sitemapRoutes.push({ route, issue: "sitemap route missing generated HTML" });
    }
  }

  const sitemapPollution = {
    thankYou: sitemapLocations.some((url) => url.includes("/thank-you/")),
    notFound: sitemapLocations.some((url) => url.includes("/404/")),
    legacy: sitemapLocations.filter((url) =>
      /\/services\/|\/contact-local-home-buyers\/|\/about-us\/|\/free-info\//.test(url),
    ),
  };

  const failedIssueGroups = Object.entries(issues).filter(([, value]) => value.length > 0);
  const hasSitemapPollution =
    sitemapPollution.thankYou || sitemapPollution.notFound || sitemapPollution.legacy.length > 0;

  const summary = {
    htmlPages: htmlFiles.length,
    sitemapFiles: xmlFiles.map((file) => path.basename(file)).sort(),
    sitemapLocations: sitemapLocations.length,
    indexablePages: indexablePageRecords.length,
    indexableSitemapPages: sitemapPageRoutes.size,
    schema: Object.fromEntries(Object.entries(schemaCounts).sort()),
  };

  console.log("[generated-seo-audit] Summary:");
  console.log(JSON.stringify(summary, null, 2));

  if (failedIssueGroups.length || hasSitemapPollution) {
    console.error("[generated-seo-audit] Issues:");
    console.error(JSON.stringify({ issues, sitemapPollution }, null, 2));
    process.exit(1);
  }

  console.log("[generated-seo-audit] All generated SEO checks passed.");
}

main().catch((error) => {
  console.error(`[generated-seo-audit] ${error.message}`);
  process.exit(1);
});
