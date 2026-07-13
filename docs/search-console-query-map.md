# Search Console Query-to-Page Map

Use this monthly after exporting Google Search Console performance data. The goal is to stop guessing and turn search data into page-level actions: which page should own each query, what is close to page one, what needs a title/meta rewrite, and where Google may be splitting the same query across multiple pages.

## Monthly Workflow

1. In Google Search Console, open Performance > Search results.
2. Export the last 3 months, plus the current month-to-date when doing a mid-month check.
3. Save each useful sheet as CSV or TSV.
4. Put the files in:

```text
site/seo-inputs/search-console/
```

5. From the `site` folder, run:

```bash
npm run seo:gsc-map
```

6. Open the generated report:

```text
site/seo-reports/search-console-query-map.md
```

## Best Export Inputs

Export these from Search Console when available:

- Queries
- Pages
- Queries by page, if you filter a page and export its queries
- Devices
- Countries
- Indexing report examples

The strongest report comes from a CSV that includes both `Query` and `Page` columns. If Search Console only gives separate Queries and Pages sheets, the report still works for CTR and near-win analysis, but page ownership and cannibalization are less complete.

## What The Script Flags

### Query/Page Ownership Mismatches

These happen when Google shows one page for a query, but another page should probably own that search intent. Example: a ZIP query should usually map to a ZIP or area page, while `take over payments` should map to the payment-takeover page.

### Low CTR Opportunities

Pages with impressions, decent position, and weak CTR should get title/meta rewrites first. This is often the fastest improvement because Google is already showing the page.

### Positions 8-30 Near Wins

These pages are close enough to improve with stronger copy, FAQs, proof, internal links, or a more exact first-screen promise.

### Possible Cannibalization

If one query appears across several pages, we need to decide which page owns it, then point internal links toward that page.

### New Page Evidence

New pages should only be added when Search Console shows impressions, the market is a real target, or the business has a strong reason to own the area/situation.

## Monthly Decision Rules

- If a page has impressions but CTR under 1%, rewrite the title and meta description before adding more content.
- If a page ranks 8-30, expand the page and add internal links from related pages.
- If the wrong page ranks, strengthen the correct page and link to it from the wrong page.
- If multiple pages rank for the same query, pick one owner and reduce mixed signals.
- If a page gets clicks but no leads, improve CTA placement and trust copy.

## Lead Quality Map

Use GA4 and form source fields to connect leads back to landing pages.

| Landing page | Leads | Phone clicks | SMS clicks | Form starts | Form completions | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `/get-offer/` |  |  |  |  |  |  |
| `/solutions/sell-house-fast/` |  |  |  |  |  |  |
| `/areas/kansas-city-mo/` |  |  |  |  |  |  |
| `/resources/sell-house-as-is-kansas-city/` |  |  |  |  |  |  |

## Weekly Actions

- Rewrite one low-CTR title/meta pair.
- Improve one page ranking positions 8-30.
- Add internal links from two related pages to the target page.
- Check indexing for newly published resources.
- Record organic leads by landing page.