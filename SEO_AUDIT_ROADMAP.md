# ACE Properties KC SEO Audit and Roadmap

Audit date: May 11, 2026  
Repo: `armentrout1/acepropertieskc.com`  
Local checkout: `C:\Users\aaron\Documents\Codex\2026-05-11\okay-i-need-you-to-pull\acepropertieskc.com`

## Current Snapshot

- Astro SSR site deployed on Railway.
- Build passes.
- Custom `seo:preflight` passes.
- Robots.txt is live and allows crawling.
- XML sitemap is live and includes 29 URLs.
- Strong existing base: homepage, areas hub, 8 area pages, solutions hub, 13 solution pages, contact, options, privacy, terms, thank-you, 404.
- GA4 tag is installed: `G-NTFNNJTML7`.
- Offer form posts to SendGrid-backed API.
- Primary organic target is clear: motivated Kansas City homeowners who need to sell as-is, fast, inherited, probate, foreclosure, repair-heavy, vacant, tenant-occupied, behind on payments, or relocation.

## Highest-Priority Findings

- `/thank-you/` was included in the XML sitemap while the page is marked `noindex`. Fixed locally: sitemap generation now excludes it.
- Google still shows legacy URLs such as `/services/` and `/contact-local-home-buyers/`. Fixed locally: legacy redirects now point to the closest modern pages.
- The repo had 13 npm audit vulnerabilities, including high-severity advisories in `axios`, `h3`, `rollup`, `vite`, `picomatch`, and `svgo`. Fixed locally: dependencies now audit clean after Astro 6 upgrade.
- `src/lib/siteConfig.ts` now uses `info@acepropertieskc.com` without a code TODO. Still confirm the final public email and align it across schema, footer, API sender, Google Business Profile, citations, and Search Console.
- Form delivery depends on `SENDGRID_API_KEY`. Confirm production env vars, verified sender/domain authentication, and lead notifications.
- `src/pages/api/send-email/index.ts` interpolated user input into HTML email without escaping. Fixed locally: email HTML now escapes lead fields.
- There was no dedicated `/get-offer/` landing page. Fixed locally: page exists and CTAs now route there from most pages.
- Fixed locally: `/resources/` now exists with a first wave of high-intent seller guides for Kansas City.
- Fixed locally: `/about/` now exists as a trust and business-identity page. Real reviews, seller testimonials, GBP link, team photo, and local project examples still need to be collected before adding them.
- Open Graph uses an SVG default image. Social previews and share cards will perform better with a real 1200x630 PNG/JPG branded card.

## Phase 1: Technical Cleanup

- [x] Add 301 redirects:
  - `/services/` -> `/solutions/`
  - `/contact-local-home-buyers/` -> `/contact/`
  - `/about-us/` -> `/`
  - `/free-info/` -> `/resources/`
  - Any other legacy URLs found in Search Console "Pages" and "Crawled - currently not indexed".
- [x] Exclude `/thank-you/` from sitemap output.
- [x] Keep `/thank-you/` `noindex, nofollow` or switch to `noindex, follow`; either is acceptable, but it should not be submitted in the sitemap.
- [x] Run `npm audit fix`.
- [x] Re-run:
  - `npm run build`
  - `npm run seo:preflight`
  - `npm audit --audit-level=moderate`
- [x] Escape HTML in SendGrid email body.
- [x] Add request body size limits or guardrails for `/api/send-email/`.
- [ ] Confirm Railway production env vars:
  - `SENDGRID_API_KEY`
  - verified sender identity for `info@acepropertieskc.com`
  - any future CRM/webhook secrets
- [x] Update `site/README.md`; it still contains Astro starter content.
- [x] Remove unused starter files/components if not referenced:
  - `src/components/Welcome.astro`
  - `src/assets/astro.svg`
  - `src/assets/background.svg`
- [x] Add a CI check that runs build, SEO preflight, and audit.

## Phase 2: Indexing and Search Console Cleanup

- [ ] In Google Search Console, submit the live sitemap:
  - `https://acepropertieskc.com/sitemap-index.xml`
- [ ] Inspect and request indexing for priority URLs:
  - `/`
  - `/areas/kansas-city-mo/`
  - `/areas/64131/`
  - `/solutions/sell-house-fast/`
  - `/solutions/inherited-house/`
  - `/solutions/probate-house/`
  - `/solutions/vacant-house/`
  - `/solutions/needs-repairs/`
  - `/solutions/pre-foreclosure/`
  - `/contact/`
- [ ] Export Search Console data for the last 3 months:
  - queries
  - pages
  - countries/devices
  - indexing report
  - crawl stats
- [x] Create Search Console query-map template.
- [ ] Build a query-to-page map from GSC data.
- [ ] Find pages with impressions but low CTR and rewrite titles/descriptions first.
- [ ] Find pages ranking positions 8-30 and expand content to win page-one movement.
- [ ] Find pages with clicks but no leads and improve CTAs/form placement.
- [ ] Track legacy 404s and redirect anything with impressions, links, or crawl activity.

## Phase 3: Conversion Foundation

- [x] Create `/get-offer/` as the primary conversion page.
- [x] Update all CTAs from `/#get-offer` to `/get-offer/` where it makes sense.
- [x] Keep homepage embedded form, but give every intent page a clean conversion path.
- [x] Add a compact form variant to solution and area pages.
- [x] Add optional "notes" field to the visible form since the API already supports it.
- [x] Add source fields:
  - landing page
  - referrer
  - UTM parameters
  - GCLID/GBRAID/WBRAID when present
- [x] Add GA4 conversion events:
  - form start
  - form submit success
  - phone click
  - SMS click
  - email click
- [ ] Mark `generate_lead` as a key event in GA4.
- [ ] Connect GA4 to Search Console.
- [ ] Add call tracking carefully, preserving NAP consistency if dynamic number insertion is used.
- [x] Add a clear privacy/consent line below form submission.
- [x] Add reusable high-intent offer block with call, text, proof points, and compact form for priority seller pages.
- [x] Tag `/get-offer/` hero SMS click for analytics.

## Phase 4: Local SEO and Trust

- [ ] Optimize Google Business Profile:
  - service-area business settings
  - primary category
  - service areas
  - phone, site, hours
  - services
  - photos
  - posts
  - Q&A
- [ ] Build a review acquisition process:
  - request review after positive seller conversations
  - add review link to follow-up texts/emails
  - respond to every review
- [x] Create a local SEO trust playbook for GBP, review, and trust asset collection.
- [ ] Add real reviews/testimonials to the site only after they are real and attributable.
- [ ] Add `sameAs` links to LocalBusiness schema once social/GBP profiles are ready.
- [ ] Add real team/about content to improve trust.
  - [x] Build `/about/` trust page framework.
  - [ ] Add real team bio/photo once available.
- [x] Add "How we calculate offers" page or section.
- [x] Add "When listing is better" content to build credibility.
- [ ] Build NAP citations consistently:
  - Google Business Profile
  - Bing Places
  - Apple Business Connect
  - Yelp
  - Facebook
  - Chamber/local business directories
  - real estate investor association profiles where relevant
- [ ] Keep business name consistent: choose `ACE Properties KC` or `Ace Property Solutions, LLC` as public-facing primary and use it consistently.

## Phase 5: Content Expansion

- [x] Launch a `/resources/` hub.
- [ ] Publish 2 useful articles per month for the first 6 months.
- [ ] Prioritize content that solves seller problems, not thin keyword pages.
- [x] First resource targets:
  - [x] How to sell a house as-is in Kansas City
  - [x] Selling an inherited house in Kansas City
  - [x] Do I need to clean out the house before selling?
  - [x] Sell a house with tenants in Kansas City
  - [x] How cash home buyers determine an offer
  - [x] Can I sell if I am behind on payments?
  - [x] Divorce and selling a house in Kansas City
  - [x] Major repairs vs selling as-is
  - [x] What is a subject-to deal?
  - [x] What happens after you contact ACE Properties KC?
- [x] Add comparison pages:
  - [x] Cash buyer vs real estate agent in Kansas City
  - [x] Sell as-is vs repair before listing
  - [x] Investor offer vs MLS net sheet
- [x] Add county/process pages:
  - [x] Jackson County probate property sale
  - [x] Johnson County inherited house sale
  - [x] Wyandotte County distressed property sale
- [x] Expand area coverage based on GSC demand and KC metro fit:
  - [x] Blue Springs, MO
  - [x] Raytown, MO
  - [x] Gladstone, MO
  - [x] North Kansas City, MO
  - [x] Grandview, MO
  - [x] Prairie Village, KS
  - [x] Mission, KS
  - [x] Leawood, KS
  - [x] Kansas City, KS
  - [x] Belton, MO
  - [x] Liberty, MO
  - [x] Parkville, MO
  - [x] Riverside, MO
  - [x] Merriam, KS
  - [x] Roeland Park, KS
  - [x] Fairway, KS
  - [x] Bonner Springs, KS
  - [x] Platte City, MO
  - [x] Gardner, KS
  - [x] Spring Hill, KS
  - [x] De Soto, KS
  - [x] Grain Valley, MO
  - [x] Oak Grove, MO
  - [x] Pleasant Hill, MO
  - [x] Smithville, MO
  - [x] Kearney, MO
  - [x] Leavenworth, KS
- [ ] Add ZIP pages only where there is evidence from Search Console or actual market focus.

## Phase 6: Page-Level SEO Improvements

- [ ] Audit every page title for click-through appeal.
  - [x] First pass complete for priority solution pages: sell fast, inherited, needs repairs, pre-foreclosure, behind on payments, tenant-occupied, vacant house, and divorce.
- [ ] Keep titles under roughly 55-60 characters where possible.
- [ ] Keep meta descriptions under roughly 150-160 characters.
- [ ] Add stronger first-screen CTAs to every solution page.
  - [x] Added reusable high-intent CTA/form block to sell fast, inherited, needs repairs, pre-foreclosure, behind on payments, tenant-occupied, vacant house, and divorce pages.
- [ ] Add local proof blocks to every area page:
  - neighborhoods
  - common property types
  - county/title notes
  - seller scenarios
  - nearby internal links
- [x] Add FAQ schema only where visible FAQ content exists.
- [x] Add breadcrumb schema to area pages and hub pages.
- [x] Add Organization schema or enrich LocalBusiness schema:
  - logo
  - image
  - telephone
  - email
  - areaServed
- [ ] Add `sameAs` once real profiles are confirmed.
- [ ] Do not add Review schema until reviews are real and visible on-page.
- [ ] Avoid publishing placeholder cards that imply unfinished pages.

## Phase 7: Performance and UX

- [ ] Run PageSpeed Insights on:
  - homepage
  - `/solutions/sell-house-fast/`
  - `/areas/kansas-city-mo/`
  - `/contact/`
- [ ] Replace SVG OG card with generated PNG/JPG social image.
- [ ] Add real imagery selectively:
  - Kansas City neighborhoods
  - team photo
  - process/trust visuals
- [ ] Keep images compressed and dimensioned.
- [ ] Consider moving GA script to a privacy-aware or deferred setup if performance suffers.
- [x] Ensure mobile bottom CTA works on every page, especially pages without a `#get-offer` anchor.
- [x] On pages without `#get-offer`, change mobile CTA to `/get-offer/`.
- [x] Check accessibility:
  - [x] focus states
  - [x] form error announcements
  - button labels
  - color contrast

## Phase 8: Authority and Links

- [ ] Build local links through partnerships:
  - estate cleanout companies
  - probate attorneys
  - title companies
  - moving companies
  - senior move managers
  - property tax resources
  - landlord groups
- [x] Create linkable resources:
  - [x] Kansas City inherited house checklist
  - [x] probate document checklist
  - [x] as-is sale net sheet template
  - [x] vacant house carrying cost calculator
- [ ] Add downloadable checklists with lead capture only if it does not block helpful content.
- [ ] Sponsor or join local organizations only where it is real and brand-aligned.

## Measurement Dashboard

Track weekly:

- Organic clicks from Search Console.
- Organic impressions from Search Console.
- Average position for top 20 target queries.
- CTR by page.
- Indexed URL count.
- 404 count and redirected legacy URLs.
- Form submissions.
- Phone clicks.
- SMS clicks.
- Leads by landing page.
- Leads by query cluster when inferable.
- Conversion rate by page.

Target query clusters:

- `sell house fast kansas city`
- `we buy houses kansas city`
- `cash home buyers kansas city`
- `sell house as is kansas city`
- `sell inherited house kansas city`
- `sell probate house kansas city`
- `sell vacant house kansas city`
- `sell house behind on payments kansas city`
- `pre foreclosure kansas city`
- `sell house with tenants kansas city`
- `sell house needing repairs kansas city`
- city modifiers: Kansas City, Overland Park, Olathe, Independence, Lee's Summit, Shawnee, Lenexa
- ZIP modifier: 64131

## Immediate Next Sprint

- [x] Add redirects for legacy URLs.
- [x] Exclude `/thank-you/` from the sitemap.
- [x] Fix npm audit vulnerabilities.
- [x] Harden the email HTML output.
- [ ] Confirm SendGrid production delivery.
- [x] Create `/get-offer/`.
- [x] Add landing-page/referrer/UTM capture to the form.
- [ ] Build the first Search Console query-to-page map once GSC data is exported.
- [x] Create the Search Console query-map template.
- [ ] Start reviews and Google Business Profile optimization.
- [x] Create local SEO trust playbook.
- [x] Publish the first resource article: "How to sell a house as-is in Kansas City."
- [x] Publish the first wave of seller-intent resource guides.
