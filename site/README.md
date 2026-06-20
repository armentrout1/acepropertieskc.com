# ACE Properties KC Site

Astro SSR website for ACE Properties KC, focused on Kansas City metro home sellers who need cash, as-is, inherited, probate, repair, tenant, foreclosure, and relocation solutions.

## Commands

Run from `site/`:

```sh
npm install
npm run dev
npm run build
npm run seo:preflight
npm audit --audit-level=moderate
```

## SEO Guardrails

- Keep one H1 per page.
- Add canonical paths through `Layout`.
- Add visible FAQ content only when matching FAQ schema is included.
- Keep `/thank-you/` out of the sitemap.
- Route conversion CTAs to `/get-offer/` unless the page intentionally uses an on-page form.
- Use real reviews only; do not add review schema without visible, verified reviews.

## Production Notes

The email API requires `SENDGRID_API_KEY` and a verified sender for `info@acepropertieskc.com`. GA4 is installed through `G-NTFNNJTML7`; mark `generate_lead` as a key event in GA4 after deployment.

Set `PUBLIC_GOOGLE_ADS_ID` plus conversion labels to enable Google Ads conversions:

- `PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_ADS_SMS_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_LABEL`

Set `PUBLIC_META_PIXEL_ID` in production to enable Meta Pixel page views plus Lead/Contact events from offer forms, phone clicks, text clicks, and email clicks. Leave it unset until the Meta Business account and pixel are approved.
