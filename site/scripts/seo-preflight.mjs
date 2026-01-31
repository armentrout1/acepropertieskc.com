import { promises as fs } from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const REQUIRED_ROUTES = [
  "/",
  "/options/",
  "/areas/",
  "/solutions/",
  "/areas/64131/",
  "/contact/",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const DIST_CANDIDATES = [
  path.join(projectRoot, "dist", "client"),
  path.join(projectRoot, "dist"),
];

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

function normalizeRoute(input) {
  let route = input.trim();
  try {
    const url = new URL(route);
    route = url.pathname;
  } catch {
    // ignore, already a path
  }

  if (!route.startsWith("/")) {
    return route;
  }

  if (route === "/") {
    return "/";
  }

  if (route.endsWith("/") || route.includes(".")) {
    return route;
  }

  return `${route}/`;
}

function extractLocs(xml) {
  const locs = [];
  const regex = /<loc>([^<]+)<\/loc>/gi;
  let match;

  while ((match = regex.exec(xml)) !== null) {
    locs.push(match[1].trim());
  }

  return locs;
}

function extractSitemapRefs(xml) {
  const sitemaps = [];
  const regex = /<sitemap>([\s\S]*?)<\/sitemap>/gi;
  let match;

  while ((match = regex.exec(xml)) !== null) {
    const sitemapContent = match[1];
    const locMatch = /<loc>([^<]+)<\/loc>/i.exec(sitemapContent);
    if (locMatch) {
      sitemaps.push(locMatch[1].trim());
    }
  }

  return sitemaps;
}

function validateSitemapUrls(urls, siteBaseUrl, isSitemapFile = false) {
  const errors = [];
  const seenUrls = new Set();
  const seenPaths = new Set();
  const normalizedBaseUrl = siteBaseUrl.replace(/\/$/, "");

  for (const url of urls) {
    // Check for duplicates
    if (seenUrls.has(url)) {
      errors.push(`Duplicate URL found: ${url}`);
      continue;
    }
    seenUrls.add(url);

    // Parse URL to validate components
    try {
      const parsedUrl = new URL(url);

      // Check if URL is under the configured site base URL
      if (!url.startsWith(normalizedBaseUrl)) {
        errors.push(
          `URL not under site base URL: ${url} (expected to start with ${normalizedBaseUrl})`,
        );
        continue;
      }

      const pathname = parsedUrl.pathname;
      
      // For sitemap files, don't enforce trailing slash rules
      if (!isSitemapFile) {
        // Check for duplicate paths (ignoring query params and hash)
        if (seenPaths.has(pathname)) {
          errors.push(`Duplicate pathname found: ${pathname} (URLs: ${url})`);
          continue;
        }
        seenPaths.add(pathname);

        // Check for trailing slash on path URLs (except root)
        if (pathname !== "/" && !pathname.endsWith("/")) {
          errors.push(`URL missing trailing slash: ${url}`);
        }

        // Check for double slashes in pathname (other than the protocol)
        if (pathname.includes("//")) {
          errors.push(`URL contains double slashes in pathname: ${url}`);
        }
      }

    } catch (parseError) {
      errors.push(`Invalid URL format: ${url}`);
    }
  }

  return errors;
}

async function collectSitemapRoutes(distDir) {
  const entries = await fs.readdir(distDir);
  const sitemapFiles = entries.filter(
    (name) => name.startsWith("sitemap") && name.endsWith(".xml"),
  );

  const routes = new Set();

  for (const file of sitemapFiles) {
    const contents = await fs.readFile(path.join(distDir, file), "utf8");
    extractLocs(contents)
      .map(normalizeRoute)
      .filter((route) => route.startsWith("/"))
      .forEach((route) => routes.add(route));
  }

  return routes;
}

async function validateSitemapStructure(distDir, siteBaseUrl) {
  const errors = [];
  const entries = await fs.readdir(distDir);
  const sitemapFiles = entries.filter(
    (name) => name.startsWith("sitemap") && name.endsWith(".xml"),
  );

  // Check if sitemap-index.xml exists and validate its references
  const sitemapIndexPath = path.join(distDir, "sitemap-index.xml");
  const sitemapIndexExists = await pathExists(sitemapIndexPath);
  
  if (sitemapIndexExists) {
    const indexContents = await fs.readFile(sitemapIndexPath, "utf8");
    const referencedSitemaps = extractSitemapRefs(indexContents);
    
    // Validate sitemap references (don't apply trailing slash rules to sitemap files)
    const sitemapRefErrors = validateSitemapUrls(referencedSitemaps, siteBaseUrl, true);
    errors.push(...sitemapRefErrors.map(err => `sitemap-index.xml: ${err}`));
    
    for (const ref of referencedSitemaps) {
      // Extract filename from URL
      const filename = ref.split("/").pop();
      const filePath = path.join(distDir, filename);
      
      if (!(await pathExists(filePath))) {
        errors.push(`sitemap-index.xml references missing file: ${filename}`);
      }
    }
  }

  // Validate all sitemap files' URLs (apply trailing slash rules to page URLs)
  for (const file of sitemapFiles) {
    const filePath = path.join(distDir, file);
    const contents = await fs.readFile(filePath, "utf8");
    const locs = extractLocs(contents);
    
    // Don't apply trailing slash rules if this is a sitemap index file
    const isSitemapIndex = file === "sitemap-index.xml";
    const urlErrors = validateSitemapUrls(locs, siteBaseUrl, isSitemapIndex);
    errors.push(...urlErrors.map(err => `${file}: ${err}`));
  }

  return errors;
}

async function findSitemapDirectory() {
  for (const dir of DIST_CANDIDATES) {
    if (!(await pathExists(dir))) {
      continue;
    }

    const entries = await fs.readdir(dir);
    const hasIndex = entries.includes("sitemap-index.xml");
    const hasSitemapFile = entries.some(
      (name) => name.startsWith("sitemap") && name.endsWith(".xml"),
    );

    if (hasIndex || hasSitemapFile) {
      return dir;
    }
  }

  return null;
}

async function resolveSiteBaseUrl() {
  const envCandidate = (process.env.SITE_BASE_URL || process.env.PUBLIC_SITE_URL || "").trim();
  if (envCandidate) {
    return envCandidate.replace(/\/$/, "");
  }

  try {
    const astroConfigPath = path.join(projectRoot, "astro.config.mjs");
    const { default: astroConfig } = await import(pathToFileURL(astroConfigPath).href);
    const configSite = typeof astroConfig?.site === "string" ? astroConfig.site.trim() : "";
    if (configSite) {
      return configSite.replace(/\/$/, "");
    }
  } catch {
    // ignore inability to load astro config; we'll fall through to error message.
  }

  return null;
}

async function loadHomepageHtml(distDir) {
  const staticCandidates = new Set();

  if (distDir) {
    staticCandidates.add(path.join(distDir, "index.html"));
    const distDirName = path.basename(distDir);
    if (distDirName !== "client") {
      staticCandidates.add(path.join(distDir, "client", "index.html"));
    }
  }

  const defaultDistDir = path.join(projectRoot, "dist");
  staticCandidates.add(path.join(defaultDistDir, "index.html"));
  staticCandidates.add(path.join(defaultDistDir, "client", "index.html"));

  for (const candidate of staticCandidates) {
    if (await pathExists(candidate)) {
      return await fs.readFile(candidate, "utf8");
    }
  }

  const serverEntryPath = path.join(projectRoot, "dist", "server", "entry.mjs");
  if (await pathExists(serverEntryPath)) {
    try {
      const previousAutostart = process.env.ASTRO_NODE_AUTOSTART;
      process.env.ASTRO_NODE_AUTOSTART = "disabled";
      const { handler } = await import(pathToFileURL(serverEntryPath).href);
      process.env.ASTRO_NODE_AUTOSTART = previousAutostart;
      if (typeof handler === "function") {
        const server = http.createServer((req, res) => handler(req, res));
        const port = await new Promise((resolve, reject) => {
          server.listen(0, "127.0.0.1", () => {
            const address = server.address();
            if (address && typeof address === "object") {
              resolve(address.port);
            } else {
              reject(new Error("Unable to determine server port"));
            }
          });
          server.on("error", (error) => {
            server.close();
            reject(error);
          });
        });

        try {
          const response = await fetch(`http://127.0.0.1:${port}/`);
          const text = await response.text();
          server.close();
          return text;
        } catch (error) {
          server.close();
          throw error;
        }
      }
    } catch (error) {
      process.env.ASTRO_NODE_AUTOSTART = undefined;
      throw new Error(`Unable to render homepage via server entry: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return null;
}

async function assertHomepageJsonLd(distDir, errors) {
  let html;
  try {
    html = await loadHomepageHtml(distDir);
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
    return;
  }

  if (!html) {
    errors.push("Unable to load homepage HTML (no index.html and server entry render failed).");
    return;
  }

  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const payloads = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    const raw = match[1].trim();
    if (!raw) {
      continue;
    }

    try {
      JSON.parse(raw);
      payloads.push(raw);
    } catch (error) {
      errors.push(`Homepage JSON-LD failed to parse: ${error instanceof Error ? error.message : String(error)}`);
      return;
    }
  }

  if (payloads.length === 0) {
    errors.push("Homepage is missing application/ld+json data after build.");
  }
}

async function assertHomepageImageAlt(distDir, errors) {
  let html;
  try {
    html = await loadHomepageHtml(distDir);
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
    return;
  }

  if (!html) {
    errors.push("Unable to load homepage HTML for image alt validation.");
    return;
  }

  const imgTagRegex = /<img\b[^>]*>/gi;
  const imgTags = html.match(imgTagRegex) ?? [];
  const offending = imgTags.filter((tag) => !tag.toLowerCase().includes("alt="));

  if (offending.length > 0) {
    const messageLines = [
      `Homepage image alt audit: found ${imgTags.length} <img> tags; ${offending.length} missing alt attributes.`,
      ...offending.map((tag) => `    - ${tag.length > 200 ? `${tag.slice(0, 200)}…` : tag}`),
    ];
    errors.push(messageLines.join("\n"));
  }
}

async function assertSolutionPageFaqs(distDir, errors) {
  // For SSR sites, we need to check the sitemap and make HTTP requests
  const sitemapPath = path.join(distDir, "sitemap-0.xml");
  
  if (!(await pathExists(sitemapPath))) {
    return; // No sitemap to check
  }

  try {
    const sitemapXml = await fs.readFile(sitemapPath, "utf8");
    const solutionUrls = extractLocs(sitemapXml)
      .filter(url => url.includes("/solutions/") && url.endsWith("/"))
      .filter(url => !url.endsWith("/solutions/")); // Exclude the main solutions index

    for (const url of solutionUrls) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          continue; // Skip if we can't fetch the page
        }
        
        const html = await response.text();
        
        // Check for visible FAQ section using common markers
        const hasVisibleFaq = 
          html.includes("FAQ") || 
          html.includes("Frequently Asked Questions") ||
          html.includes("FAQ</h2>") ||
          html.includes("FAQ</h3>") ||
          /<details[^>]*>/gi.test(html); // Check for FAQ details elements

        // Check for FAQPage schema in JSON-LD
        const hasFaqSchema = html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"');

        if (hasVisibleFaq && !hasFaqSchema) {
          errors.push(`Solution page ${url} has visible FAQ content but missing FAQPage JSON-LD schema`);
        }
      } catch (fetchError) {
        // Skip pages that can't be fetched, but don't fail the entire check
        console.warn(`Warning: Could not fetch ${url} for FAQ validation`);
      }
    }
  } catch (error) {
    errors.push(`Failed to read sitemap for FAQ validation: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function main() {
  const errors = [];

  const distDir = await findSitemapDirectory();
  if (!distDir) {
    errors.push("Unable to locate sitemap output in dist/client or dist. Run `npm run build` first.");
  }

  const siteBaseUrl = await resolveSiteBaseUrl();
  if (!siteBaseUrl) {
    errors.push("SITE_BASE_URL (or PUBLIC_SITE_URL) must be set before running seo:preflight.");
  }

  if (distDir) {
    await assertHomepageJsonLd(distDir, errors);
    await assertHomepageImageAlt(distDir, errors);
    await assertSolutionPageFaqs(distDir, errors);

    const robotsPath = path.join(distDir, "robots.txt");
    if (!(await pathExists(robotsPath))) {
      const relativeRobotsPath = path.relative(projectRoot, robotsPath);
      errors.push(`Missing ${relativeRobotsPath}`);
    }

    const sitemapIndexPath = path.join(distDir, "sitemap-index.xml");
    const sitemapZeroPath = path.join(distDir, "sitemap-0.xml");

    const sitemapIndexExists = await pathExists(sitemapIndexPath);
    const sitemapZeroExists = await pathExists(sitemapZeroPath);

    if (!sitemapIndexExists && !sitemapZeroExists) {
      errors.push("Missing sitemap output (expected sitemap-index.xml or sitemap-0.xml)");
    }
  }

  if (errors.length === 0) {
    // Validate sitemap structure and URLs
    const sitemapErrors = await validateSitemapStructure(distDir, siteBaseUrl);
    errors.push(...sitemapErrors);

    // Check required routes (existing logic)
    const sitemapRoutes = await collectSitemapRoutes(distDir);
    const missingRoutes = REQUIRED_ROUTES.filter(
      (required) => !sitemapRoutes.has(required),
    );

    if (missingRoutes.length > 0) {
      errors.push(
        `Sitemap is missing required routes: ${missingRoutes.join(", ")}`,
      );
    }
  }

  if (errors.length > 0) {
    console.error("[seo-preflight] ❌ Checks failed:");
    for (const err of errors) {
      console.error(`  • ${err}`);
    }
    process.exit(1);
  } else {
    console.log("[seo-preflight] ✅ All SEO preflight checks passed.");
  }
}

main().catch((error) => {
  console.error("[seo-preflight] Unexpected error:", error);
  process.exit(1);
});
