export const SOURCE_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
];
export const ATTRIBUTION_KEY = "ace.attribution.v1";
export const ATTRIBUTION_TTL_MS = 30 * 60 * 1000;

// Preserve the first entry for this tab until 30 minutes of inactivity.
// Store only acquisition details, never property or contact form values.
export function captureAttribution({
  href,
  referrer = "",
  storage,
  now = Date.now(),
}) {
  const url = new URL(href);
  const params = new URLSearchParams(url.search);
  let externalReferrer = "";
  try {
    const ref = new URL(referrer);
    if (
      ["http:", "https:"].includes(ref.protocol) &&
      ref.origin !== url.origin
    ) {
      externalReferrer = ref.origin + ref.pathname;
    }
  } catch {
    /* Direct visit or unavailable referrer. */
  }
  const fields = ["landing_page", "referrer", ...SOURCE_FIELDS];
  let entry = {
    landing_page: url.origin + url.pathname,
    referrer: externalReferrer,
    ...Object.fromEntries(
      SOURCE_FIELDS.map((key) => [key, (params.get(key) || "").slice(0, 500)]),
    ),
  };
  try {
    const saved = JSON.parse(storage?.getItem(ATTRIBUTION_KEY) || "null");
    if (
      saved?.version === 1 &&
      Number.isFinite(saved.last_seen_at) &&
      now >= saved.last_seen_at &&
      now - saved.last_seen_at < ATTRIBUTION_TTL_MS &&
      fields.every((key) => typeof saved.entry?.[key] === "string") &&
      new URL(saved.entry.landing_page).origin === url.origin
    ) {
      entry = Object.fromEntries(fields.map((key) => [key, saved.entry[key]]));
    }
  } catch {
    /* Blocked storage or invalid data must never prevent an inquiry. */
  }
  try {
    storage?.setItem(
      ATTRIBUTION_KEY,
      JSON.stringify({ version: 1, last_seen_at: now, entry }),
    );
  } catch {
    /* The current-page source still works when storage is unavailable. */
  }
  return entry;
}
