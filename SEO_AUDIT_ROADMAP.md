# ACE Properties KC SEO Audit and Roadmap

Audit date: May 11, 2026  
Latest generated-output audit: June 21, 2026
Latest live QA pass: June 21, 2026
Repo: `armentrout1/acepropertieskc.com`  
Local checkout: `C:\Users\aaron\Documents\Codex\2026-06-19\i-need-you-to-look-up\work\acepropertieskc.com`

## Current Snapshot

- Astro SSR site deployed on Railway.
- Build passes.
- Custom `seo:preflight` passes.
- Robots.txt is live and allows crawling.
- XML sitemap output includes 106 indexable page URLs plus the sitemap index.
- Strong existing base: homepage, areas hub, 8 area pages, solutions hub, 13 solution pages, contact, options, privacy, terms, thank-you, 404.
- Expanded local/content base now includes the resources hub, 28 resource articles/tools, 13 solution pages, 8 core area pages, and 27 dynamic metro expansion area pages.
- Dynamic metro expansion pages now include neighborhood focus, common seller situations, explicit property-type proof, county/title notes, and nearby internal links.
- GA4 tag is installed: `G-NTFNNJTML7`.
- Offer form posts to SendGrid-backed API; production API accepted a clearly labeled QA lead on June 20, 2026.
- Generated lead audit passes with 81 offer forms across 79 pages and 12 required lead routes covered.
- V3 code/build roadmap is functionally complete; remaining open items are outside-code tasks such as Search Console/GA4 setup, Google Business Profile, real reviews/testimonials, real photos, citations, and final business-consent language.
- Primary organic target is clear: motivated Kansas City homeowners who need to sell as-is, fast, inherited, probate, foreclosure, repair-heavy, vacant, tenant-occupied, behind on payments, or relocation.
- Latest generated HTML audit found no sitemap pollution, JSON-LD parse errors, missing H1s, title-length issues, meta-description issues, missing canonicals, or missing offer/contact paths on indexable pages.
- Live QA confirmed homepage, `/get-offer/`, `/direct-buyer-vs-wholesaler/`, `/thank-you/`, robots, sitemap index, and sitemap file return `200`.
- Latest GitHub Actions SEO Checks run on `main` passed after the final roadmap/mobile QA push.

## Highest-Priority Findings

- `/thank-you/` was included in the XML sitemap while the page is marked `noindex`. Fixed locally: sitemap generation now excludes it.
- Google still shows legacy URLs such as `/services/` and `/contact-local-home-buyers/`. Fixed locally: legacy redirects now point to the closest modern pages.
- The repo had 13 npm audit vulnerabilities, including high-severity advisories in `axios`, `h3`, `rollup`, `vite`, `picomatch`, and `svgo`. Fixed locally: dependencies now audit clean after Astro 6 upgrade.
- `src/lib/siteConfig.ts` now uses `info@acepropertieskc.com` without a code TODO. Still confirm the final public email and align it across schema, footer, API sender, Google Business Profile, citations, and Search Console.
- Form delivery depends on `SENDGRID_API_KEY`. Production API returned `200 {"ok":true}` for a QA lead, and the QA email arrived in the destination inbox.
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
- [x] Confirm Railway production env vars and inbox delivery:
  - `SENDGRID_API_KEY`
  - verified sender identity for `info@acepropertieskc.com`
  - any future CRM/webhook secrets
  - [x] Production API accepted a valid QA lead.
  - [x] Confirm the QA lead email arrived in the destination inbox.
- [x] Update `site/README.md`; it still contains Astro starter content.
- [x] Remove unused starter files/components if not referenced:
  - `src/components/Welcome.astro`
  - `src/assets/astro.svg`
  - `src/assets/background.svg`
- [x] Add a CI check that runs build, SEO preflight, and audit.
- [x] Add a generated lead audit to CI for key lead routes, form fields, UTM/GCLID capture, thank-you redirect, and tracking hooks.

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

## Phase 2A: Search Console Optimization - June 2026

Data source: Search Console exports dated June 11, 2026.

Current search signal:

- Total web search performance: 23 clicks and 8,546 impressions over the exported 3-month range.
- Biggest impression opportunity: `/solutions/sell-house-fast/` with 3,264 impressions, 1 click, and average position around 49.9.
- Top query opportunity: `sell my house fast kansas city` with 780 impressions, 0 clicks, and average position around 53.2.
- Near-win city pages: Shawnee, Olathe, and Overland Park are getting impressions and should receive the next local-content upgrades.
- Coverage cleanup still matters: 4 not-found URLs, 1 soft 404, 55 discovered/currently not indexed, and 10 crawled/currently not indexed.

Checklist:

- [x] Rework `/solutions/sell-house-fast/` for the "sell my house fast Kansas City" query cluster.
  - [x] Rewrite title and meta description for higher CTR.
  - [x] Strengthen first-screen promise: no repairs, no showings, local buyer, clear cash/flexible options.
  - [x] Add a scannable quick-answer block above or near the first form.
  - [x] Add city-specific internal links to Olathe, Overland Park, Shawnee, Independence, and Kansas City, MO.
  - [x] Add stronger "who this is for" copy for vacant, inherited, repairs, tenants, behind on payments, relocation, and probate.
- [ ] Strengthen near-win city pages.
  - [x] Shawnee, KS: add more local seller-situation proof and stronger CTA language.
  - [x] Olathe, KS: add more local seller-situation proof and stronger CTA language.
  - [x] Overland Park, KS: add more local seller-situation proof and stronger CTA language.
- [ ] Review Search Console coverage examples.
  - [ ] Identify the 4 not-found URLs and redirect any with impressions or crawl value.
  - [ ] Inspect the soft 404 and either strengthen the page or redirect it.
  - [ ] Review "crawled - currently not indexed" examples for thinness, duplication, or weak internal links.
  - [ ] Review "discovered - currently not indexed" examples and improve internal linking to priority URLs.
- [x] Add calculator engagement analytics.
  - [x] Track `calculator_start`.
  - [x] Track `calculator_result_view`.
- [x] Add form friction analytics.
  - [x] Track `form_validation_error`.
  - [x] Track `form_submit_error`.
- [ ] In GA4, mark key lead-intent events.
  - [ ] `generate_lead`
  - [ ] `phone_click`
  - [ ] `sms_click`
  - [ ] `calculator_result_view`
- [ ] Build local authority signals.
  - [ ] Google Business Profile updates/posts/photos.
  - [ ] Real review acquisition workflow.
  - [ ] Foundational citations: Bing Places, Apple Business Connect, Facebook, Yelp, relevant local directories.
  - [ ] Local partnership/link outreach list.

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
- [x] Live browser QA confirmed `/get-offer/` form visibility, UTM population, and client-side validation.
- [x] Live browser QA confirmed the homepage and `/get-offer/` address-first forms are above the fold on mobile and desktop, with no visible consent-checkbox friction.

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

- [x] Audit every page title for click-through appeal.
  - [x] First pass complete for priority solution pages: sell fast, inherited, needs repairs, pre-foreclosure, behind on payments, tenant-occupied, vacant house, and divorce.
- [x] Generated-output title audit passes: every indexable page has exactly one title in the current acceptable range.
- [x] Keep titles under roughly 55-60 characters where possible.
- [x] Keep meta descriptions under roughly 150-160 characters.
- [x] Generated-output meta description audit passes with no indexable page over 160 characters.
- [ ] Add stronger first-screen CTAs to every solution page.
  - [x] Added reusable high-intent CTA/form block to sell fast, inherited, needs repairs, pre-foreclosure, behind on payments, tenant-occupied, vacant house, and divorce pages.
- [x] Add local proof blocks to every area page:
  - neighborhoods
  - common property types
  - county/title notes
  - seller scenarios
  - nearby internal links
  - [x] Core area pages use custom local sections.
  - [x] Dynamic expansion pages use reusable city data with property-type proof cards.
- [x] Add FAQ schema only where visible FAQ content exists.
- [x] Add breadcrumb schema to area pages and hub pages.
- [x] Add Organization schema or enrich LocalBusiness schema:
  - logo
  - image
  - telephone
  - email
  - areaServed
- [x] Add Service schema to priority seller-situation solution pages.
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
- [x] V3 mobile polish pass:
  - [x] Homepage form visible above the first mobile fold.
  - [x] `/get-offer/` form visible above the first mobile fold.
  - [x] `/direct-buyer-vs-wholesaler/` mobile hero tightened so the address field starts within the first mobile fold.
  - [x] No horizontal overflow found in live mobile checks.
  - [x] Latest roadmap/mobile QA status pushed to `main` and verified by GitHub Actions SEO Checks.

### Sitewide Visual and Content QA - June 21, 2026

Latest rendered audit scope:

- Desktop default viewport and mobile 390px viewport.
- Sampled priority routes: `/`, `/options/`, `/direct-buyer-vs-wholesaler/`, `/get-offer/`, `/solutions/`, `/solutions/behind-on-payments/`, `/solutions/inherited-house/`, `/areas/`, `/areas/kansas-city-mo/`, `/resources/`, `/resources/subject-to-real-estate-kansas-city/`, `/seller-stories/`, and `/about/`.

Checklist:

- [x] Confirmed the live `/options/` page had a broken promise-panel layout where CTA/story cards collapsed into an unreadable narrow rail.
- [x] Fixed the shared `CreativePromisePanel` layout so proof cards and CTA buttons have stable width on desktop and stack cleanly on mobile.
- [x] Hardened `TrustProofStrip` against the same `auto + 1fr` grid behavior.
- [x] Local desktop and mobile rendered audit after the fix found no horizontal overflow on sampled priority routes.
- [ ] Do a seller-friendly edit pass on `/options/` below the hero: keep the fixed promise panel, then reduce repetitive sections so the page feels like a clear comparison path, not a long explanation.
- [ ] Tighten long paragraphs on `/areas/kansas-city-mo/`; generated content scan found 8 long paragraphs over 260 characters.
- [ ] Tighten long paragraphs on `/solutions/inherited-house/`; several sections read like long-form guidance and need more scannable seller steps.
- [ ] Review `/areas/`, `/direct-buyer-vs-wholesaler/`, and `/resources/subject-to-real-estate-kansas-city/` for run-on paragraphs and repeated explanations.
- [ ] Prioritize next editorial fixes by long-paragraph count:
  - `/areas/kansas-city-mo/` - 8 long paragraphs
  - `/areas/independence-mo/` - 5 long paragraphs
  - `/solutions/inherited-house/` - 4 long paragraphs
  - `/solutions/divorce/` - 4 long paragraphs
  - `/areas/lees-summit-mo/` - 4 long paragraphs
  - `/areas/shawnee-ks/`, `/areas/olathe-ks/`, `/areas/lenexa-ks/`, `/solutions/needs-repairs/`, `/solutions/tenant-occupied/` - 3 long paragraphs each
- [ ] Add a recurring visual QA rule: avoid `auto + 1fr` layout grids for mixed headline/action sections unless the content width is explicitly constrained.
- [ ] Editorial rule for future pages: one job per section, 2-3 sentence max paragraphs, convert risk/legal/detail-heavy content into cards, lists, or FAQs.

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
- [x] Confirm SendGrid production delivery.
  - [x] Production form API accepted a valid QA lead.
  - [x] Confirm the QA lead email arrived in the destination inbox.
- [x] Create `/get-offer/`.
- [x] Add landing-page/referrer/UTM capture to the form.
- [x] Build the Kansas City distressed seller ZIP cluster.
  - [x] Added ZIP pages for 64124, 64128, 64127, 64130, 64132, 66102, 66104, and 66106.
  - [x] Added the distressed ZIP cluster resource hub.
- [x] Build the Kansas City quality-equity ZIP cluster.
  - [x] Added ZIP pages for 64113, 64114, 64145, 66204, 66205, 66206, and 66212.
  - [x] Added the quality-equity ZIP cluster resource hub.
- [ ] After the next GSC export, compare impressions for distressed ZIP terms vs quality ZIP terms and decide which cluster gets the next content expansion.- [ ] Build the first Search Console query-to-page map once GSC data is exported.
- [x] Create the Search Console query-map template.
- [ ] Start reviews and Google Business Profile optimization.
- [x] Create local SEO trust playbook.
- [x] Publish the first resource article: "How to sell a house as-is in Kansas City."
- [x] Publish the first wave of seller-intent resource guides.

