import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.join(process.cwd(), "seo-inputs", "search-console");
const outputDir = path.join(process.cwd(), "seo-reports");
const outputFile = path.join(outputDir, "search-console-query-map.md");

const locationOwners = [
  ["overland park", "/areas/overland-park-ks/"],
  ["olathe", "/areas/olathe-ks/"],
  ["shawnee", "/areas/shawnee-ks/"],
  ["lenexa", "/areas/lenexa-ks/"],
  ["leawood", "/areas/leawood-ks/"],
  ["prairie village", "/areas/prairie-village-ks/"],
  ["mission", "/areas/mission-ks/"],
  ["fairway", "/areas/fairway-ks/"],
  ["westwood", "/areas/westwood-ks/"],
  ["kansas city ks", "/areas/kansas-city-ks/"],
  ["kansas city, ks", "/areas/kansas-city-ks/"],
  ["kck", "/areas/kansas-city-ks/"],
  ["kansas city mo", "/areas/kansas-city-mo/"],
  ["kansas city, mo", "/areas/kansas-city-mo/"],
  ["independence", "/areas/independence-mo/"],
  ["raytown", "/areas/raytown-mo/"],
  ["blue springs", "/areas/blue-springs-mo/"],
  ["lees summit", "/areas/lees-summit-mo/"],
  ["lee's summit", "/areas/lees-summit-mo/"],
  ["64131", "/areas/64131/"],
  ["66109", "/areas/66109/"],
  ["66102", "/areas/66102/"],
  ["66104", "/areas/66104/"],
  ["66106", "/areas/66106/"],
  ["64124", "/areas/64124/"],
  ["64128", "/areas/64128/"],
  ["64127", "/areas/64127/"],
  ["64130", "/areas/64130/"],
  ["64132", "/areas/64132/"],
  ["64113", "/areas/64113/"],
  ["64114", "/areas/64114/"],
  ["64145", "/areas/64145/"],
  ["66204", "/areas/66204/"],
  ["66205", "/areas/66205/"],
  ["66206", "/areas/66206/"],
  ["66212", "/areas/66212/"],
];

const intentOwners = [
  [/sell (my |your )?house fast|sell.*fast/, "/solutions/sell-house-fast/", "sell house fast"],
  [/we buy houses|cash home buyer|cash buyer|cash offer/, "/cash-home-buyers-kansas-city/", "cash buyer"],
  [/as[- ]?is|as is/, "/sell-house-as-is-kansas-city/", "as-is sale"],
  [/inherited|inheritance|parents died|probate/, "/sell-inherited-house-kansas-city/", "inherited/probate"],
  [/foreclosure|pre[- ]?foreclosure|auction/, "/solutions/facing-foreclosure/", "foreclosure"],
  [/behind.*mortgage|behind.*payment|late payment|take over payment|subject to|little equity/, "/take-over-payments-kansas-city/", "payment trouble"],
  [/tax lien|back taxes|property taxes/, "/solutions/tax-lien/", "tax issue"],
  [/vacant|empty house|abandoned/, "/solutions/vacant-house/", "vacant house"],
  [/tenant|rental|bad tenant/, "/solutions/tenant-occupied/", "tenant/rental"],
  [/repair|foundation|water damage|fire damage|code violation|needs work/, "/solutions/needs-repairs/", "repairs"],
  [/divorce/, "/solutions/divorce/", "divorce"],
  [/relocat|moving/, "/solutions/relocating/", "relocation"],
];

function normalizeHeader(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function parseNumber(value) {
  if (!value) return 0;
  return Number(String(value).replace(/[%,$,\s]/g, "")) || 0;
}

function parseCtr(value) {
  if (!value) return 0;
  const raw = String(value).trim();
  const parsed = parseNumber(raw);
  return raw.includes("%") ? parsed : parsed * 100;
}

function splitDelimited(text, delimiter) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index++;
      row.push(cell);
      if (row.some((part) => part.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((part) => part.trim())) rows.push(row);
  return rows;
}

function pickColumn(headers, candidates) {
  const normalized = headers.map(normalizeHeader);
  return candidates.reduce((found, candidate) => {
    if (found >= 0) return found;
    return normalized.indexOf(candidate);
  }, -1);
}

async function readExport(file) {
  const text = await fs.readFile(file, "utf8");
  const delimiter = text.includes("\t") && !text.split("\n")[0].includes(",") ? "\t" : ",";
  const rows = splitDelimited(text, delimiter);
  if (rows.length < 2) return [];

  const headers = rows[0];
  const queryIndex = pickColumn(headers, ["query", "topqueries", "searchquery"]);
  const pageIndex = pickColumn(headers, ["page", "pages", "url", "landingpage"]);
  const clicksIndex = pickColumn(headers, ["clicks"]);
  const impressionsIndex = pickColumn(headers, ["impressions"]);
  const ctrIndex = pickColumn(headers, ["ctr"]);
  const positionIndex = pickColumn(headers, ["position", "avgposition", "averageposition"]);

  return rows.slice(1).map((row) => ({
    source: path.basename(file),
    query: queryIndex >= 0 ? row[queryIndex]?.trim() ?? "" : "",
    page: pageIndex >= 0 ? normalizePage(row[pageIndex]) : "",
    clicks: clicksIndex >= 0 ? parseNumber(row[clicksIndex]) : 0,
    impressions: impressionsIndex >= 0 ? parseNumber(row[impressionsIndex]) : 0,
    ctr: ctrIndex >= 0 ? parseCtr(row[ctrIndex]) : 0,
    position: positionIndex >= 0 ? parseNumber(row[positionIndex]) : 0,
  })).filter((row) => row.query || row.page);
}

function normalizePage(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  try {
    const url = raw.startsWith("http") ? new URL(raw) : new URL(raw, "https://acepropertieskc.com");
    return url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
  } catch {
    return raw;
  }
}

function expectedOwnerForQuery(query) {
  const normalized = query.toLowerCase();
  const location = locationOwners.find(([token]) => normalized.includes(token));
  if (location) return { owner: location[1], reason: "location match" };

  const intent = intentOwners.find(([pattern]) => pattern.test(normalized));
  if (intent) return { owner: intent[1], reason: intent[2] };

  return { owner: "", reason: "manual review" };
}

function actionFor(row, expectedOwner) {
  const hasMismatch = row.page && expectedOwner && row.page !== expectedOwner;

  if (hasMismatch && row.impressions >= 10) {
    return "Review owner page and add internal links/canonical intent";
  }

  if (row.impressions >= 50 && row.ctr < 1 && row.position <= 30) {
    return "Rewrite title/meta for CTR";
  }

  if (row.position >= 8 && row.position <= 30) {
    return "Near-win: expand copy, FAQ, proof, and internal links";
  }

  if (row.impressions >= 100 && row.position > 30) {
    return "Strengthen relevance or create a better-matched page";
  }

  if (row.clicks > 0) {
    return "Protect ranking and improve conversion path";
  }

  return "Monitor";
}

function summarizeRows(rows) {
  return rows
    .map((row) => {
      const expected = row.query ? expectedOwnerForQuery(row.query) : { owner: row.page, reason: "page export" };
      return {
        ...row,
        expectedOwner: expected.owner,
        ownerReason: expected.reason,
        action: actionFor(row, expected.owner),
      };
    })
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position);
}

function topRows(rows, predicate, limit = 15) {
  return rows.filter(predicate).slice(0, limit);
}

function formatPercent(value) {
  return `${value.toFixed(value < 1 ? 2 : 1)}%`;
}

function table(rows, columns) {
  if (!rows.length) return "_No rows matched this bucket._\n";
  const header = `| ${columns.map((column) => column.label).join(" | ")} |`;
  const divider = `| ${columns.map((column) => column.align === "right" ? "---:" : "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${columns.map((column) => column.format(row)).join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}

function buildCannibalization(rows) {
  const map = new Map();
  for (const row of rows) {
    if (!row.query || !row.page) continue;
    if (!map.has(row.query)) map.set(row.query, new Map());
    const pages = map.get(row.query);
    pages.set(row.page, (pages.get(row.page) ?? 0) + row.impressions);
  }

  return [...map.entries()]
    .map(([query, pages]) => ({
      query,
      pages: [...pages.entries()].sort((a, b) => b[1] - a[1]),
      total: [...pages.values()].reduce((sum, value) => sum + value, 0),
    }))
    .filter((item) => item.pages.length > 1)
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
}

function report(rows) {
  const hasQueryPageRows = rows.some((row) => row.query && row.page);
  const lowCtr = topRows(rows, (row) => row.impressions >= 50 && row.ctr < 1 && row.position <= 30);
  const nearWins = topRows(rows, (row) => row.position >= 8 && row.position <= 30);
  const mismatches = topRows(rows, (row) => row.query && row.page && row.expectedOwner && row.page !== row.expectedOwner && row.impressions >= 10);
  const buildEvidence = topRows(rows, (row) => row.query && !row.expectedOwner && row.impressions >= 20);
  const cannibalization = buildCannibalization(rows);

  const commonColumns = [
    { label: "Query", format: (row) => row.query || "-" },
    { label: "Current Page", format: (row) => row.page || "-" },
    { label: "Expected Owner", format: (row) => row.expectedOwner || "manual review" },
    { label: "Clicks", align: "right", format: (row) => String(row.clicks) },
    { label: "Impr.", align: "right", format: (row) => String(row.impressions) },
    { label: "CTR", align: "right", format: (row) => formatPercent(row.ctr) },
    { label: "Pos.", align: "right", format: (row) => row.position ? row.position.toFixed(1) : "-" },
    { label: "Action", format: (row) => row.action },
  ];

  return `# Search Console Query-to-Page Map

Generated: ${new Date().toISOString().slice(0, 10)}

## How To Use This

1. Export Google Search Console performance data as CSV or TSV.
2. Put the files in \`site/seo-inputs/search-console/\`.
3. Run \`npm run seo:gsc-map\` from the \`site\` folder.
4. Optimize the pages in this order: mismatched ownership, low CTR, positions 8-30, then new-page evidence.

${hasQueryPageRows ? "" : "> Note: No combined query-by-page export was detected. The report still works, but owner mismatch and cannibalization get stronger when the export includes both Query and Page columns.\n"}

## Low CTR Opportunities

${table(lowCtr, commonColumns)}

## Positions 8-30 Near Wins

${table(nearWins, commonColumns)}

## Query/Page Ownership Mismatches

${table(mismatches, commonColumns)}

## Possible Cannibalization

${cannibalization.length ? cannibalization.map((item) => `- \`${item.query}\` appears across ${item.pages.length} pages: ${item.pages.map(([page, impressions]) => `${page} (${impressions})`).join(", ")}`).join("\n") : "_No multi-page query overlap found in this export._"}

## New Page Evidence

${table(buildEvidence, commonColumns)}

## Next Work Queue

${table(topRows(rows, (row) => row.action !== "Monitor", 25), commonColumns)}

## Export Sources

${[...new Set(rows.map((row) => row.source))].map((source) => `- ${source}`).join("\n")}
`;
}

async function main() {
  await fs.mkdir(inputDir, { recursive: true });
  await fs.mkdir(outputDir, { recursive: true });

  const providedFiles = process.argv.slice(2);
  const files = providedFiles.length
    ? providedFiles.map((file) => path.resolve(file))
    : (await fs.readdir(inputDir)).map((file) => path.join(inputDir, file));

  const supported = files.filter((file) => /\.(csv|tsv|txt)$/i.test(file));
  const unsupported = files.filter((file) => /\.(xlsx|xls)$/i.test(file));

  if (unsupported.length) {
    console.warn("[gsc-query-map] Skipping spreadsheet exports. Open them and export the relevant sheet as CSV first:");
    for (const file of unsupported) console.warn(`- ${file}`);
  }

  if (!supported.length) {
    await fs.writeFile(outputFile, report([]));
    console.warn(`[gsc-query-map] No CSV/TSV exports found. Add Search Console exports to ${inputDir} or pass file paths to the command.`);
    console.log(`[gsc-query-map] Wrote ${outputFile}`);
    return;
  }

  const rows = (await Promise.all(supported.map(readExport))).flat();
  const summarized = summarizeRows(rows);
  await fs.writeFile(outputFile, report(summarized));
  console.log(`[gsc-query-map] Read ${supported.length} export(s), mapped ${summarized.length} row(s).`);
  console.log(`[gsc-query-map] Wrote ${outputFile}`);
}

main().catch((error) => {
  console.error(`[gsc-query-map] ${error.message}`);
  process.exit(1);
});
