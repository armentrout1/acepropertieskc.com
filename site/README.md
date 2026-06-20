# ACE Properties KC Site

Astro SSR website for ACE Properties KC, focused on Kansas City metro home sellers who need cash, as-is, inherited, probate, repair, tenant, foreclosure, and relocation solutions.

## Commands

Run from `site/`:

```sh
npm install
npm run dev
npm run build
npm run seo:preflight
npm run lead:audit
npm audit --audit-level=moderate
```

## SEO Guardrails

- Keep one H1 per page.
- Add canonical paths through `Layout`.
- Add visible FAQ content only when matching FAQ schema is included.
- Keep `/thank-you/` out of the sitemap.
- Route conversion CTAs to `/get-offer/` unless the page intentionally uses an on-page form.
- Use real reviews only; do not add review schema without visible, verified reviews.

## Lead Guardrails

- Run `npm run build` before `npm run lead:audit`.
- The lead audit scans generated HTML for offer forms, UTM/GCLID/GBRAID/WBRAID capture fields, landing page/referrer fields, consent, honeypot protection, and live error regions.
- The audit also checks the generated output for GA4 lead events, click events, optional Google Ads conversion hooks, optional Meta contact hooks, and the `/thank-you/` redirect.
- Key lead routes must keep an offer form, including the homepage, `/get-offer/`, paid-search landing pages, seller stories, contact page, and the cash-buyer-vs-agent comparison guide.

## Production Notes

The email API requires `SENDGRID_API_KEY` and a verified sender for `info@acepropertieskc.com`. GA4 is installed through `G-NTFNNJTML7`; mark `generate_lead` as a key event in GA4 after deployment.

Set `PUBLIC_GOOGLE_ADS_ID` plus conversion labels to enable Google Ads conversions:

- `PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_ADS_SMS_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_LABEL`

Set `PUBLIC_META_PIXEL_ID` in production to enable Meta Pixel page views plus Lead/Contact events from offer forms, phone clicks, text clicks, and email clicks. Leave it unset until the Meta Business account and pixel are approved.
