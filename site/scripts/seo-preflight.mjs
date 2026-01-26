import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
const distDir = path.join(projectRoot, "dist");

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

async function collectSitemapRoutes() {
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

async function main() {
  const errors = [];

  if (!(await pathExists(distDir))) {
    errors.push("Missing dist directory. Run `npm run build` first.");
  }

  const robotsPath = path.join(distDir, "robots.txt");
  if (!(await pathExists(robotsPath))) {
    errors.push("Missing dist/robots.txt");
  }

  const sitemapIndexPath = path.join(distDir, "sitemap-index.xml");
  const sitemapZeroPath = path.join(distDir, "sitemap-0.xml");

  const sitemapIndexExists = await pathExists(sitemapIndexPath);
  const sitemapZeroExists = await pathExists(sitemapZeroPath);

  if (!sitemapIndexExists && !sitemapZeroExists) {
    errors.push("Missing sitemap output (expected sitemap-index.xml or sitemap-0.xml)");
  }

  if (errors.length === 0) {
    const sitemapRoutes = await collectSitemapRoutes();
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
