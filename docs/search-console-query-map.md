# Search Console Query Map

Use this after exporting Google Search Console performance data. The goal is to turn search data into page-level actions.

## Export Inputs

Export the last 3 months from Search Console:

- Queries
- Pages
- Queries by page when possible
- Devices
- Countries
- Indexing report

## Priority Buckets

### Fix CTR First

Look for pages with impressions and weak CTR.

| Page | Top query | Impressions | CTR | Avg position | Action |
| --- | --- | ---: | ---: | ---: | --- |
| `/` | `we buy houses kansas city` |  |  |  | Rewrite title/meta for intent |
| `/areas/kansas-city-mo/` | `cash home buyers kansas city mo` |  |  |  | Add stronger local proof |
| `/solutions/sell-house-fast/` | `sell my house fast kansas city` |  |  |  | Tighten title and first CTA |

### Expand Positions 8-30

These pages are close enough to improve with better copy, FAQs, internal links, or local proof.

| Query | Current page | Avg position | Missing intent | Action |
| --- | --- | ---: | --- | --- |
| `sell inherited house kansas city` | `/solutions/inherited-house/` |  | probate/title/family concerns | Add proof or FAQ |
| `sell house as is kansas city` | `/resources/sell-house-as-is-kansas-city/` |  | repair examples | Add local examples |
| `pre foreclosure kansas city` | `/solutions/pre-foreclosure/` |  | deadlines/payoff | Add county timeline notes |

### Build New Pages Only From Evidence

Create new location or ZIP pages when Search Console shows impressions or real business focus.

| Query cluster | Candidate page | Evidence needed | Status |
| --- | --- | --- | --- |
| `sell house fast raytown mo` | `/areas/raytown-mo/` | impressions or lead history | waiting |
| `we buy houses kansas city ks` | `/areas/kansas-city-ks/` | impressions or lead history | waiting |
| `cash home buyers blue springs mo` | `/areas/blue-springs-mo/` | impressions or lead history | waiting |

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
