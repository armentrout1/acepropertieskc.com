# Tech stack & repo setup

## Recommendation (best default for this project)
Use **Astro + Tailwind** for a fast, SEO-friendly, mostly-static marketing site.

Why:
- Static output is easy to host almost anywhere.
- Excellent performance (mobile-first).
- Simple URL routing for area pages and long-tail content.

### Development requirements
Astro requires an even-numbered supported Node.js version. Current Astro docs list Node `v18.20.8`, `v20.3.0`, and `v22.0.0` or higher as supported baselines. We recommend using the latest even-numbered LTS (Node 24 is active LTS as of Jan 2026).

## Step 1 — Initialize the repo (Astro)
From your blank folder:

```bash
# (1) Create an Astro project in the current directory
npm create astro@latest .

# Choose:
# - TypeScript: yes
# - Template: minimal (or "empty")
# - Install dependencies: yes
```

## Step 2 — Add required integrations
```bash
# TailwindCSS
npx astro add tailwind

# MDX support (optional but recommended)
npx astro add mdx

# Sitemap (recommended)
npx astro add sitemap
```

## Step 3 — Add core libraries
```bash
# Icons
npm i lucide

# Class utilities (optional but useful)
npm i clsx

# Formatting
npm i -D prettier prettier-plugin-astro
```

## Step 4 — Create baseline project structure
Suggested structure:

```text
/
  /docs
  /public
    /images
    robots.txt
  /src
    /components
    /layouts
    /pages
    /styles
    /content
      /areas
      /solutions
      /resources
```

## Step 5 — SEO + metadata defaults
Implement:
- Sitewide `<title>` and meta description fallbacks
- OpenGraph defaults
- Canonical URL logic
- JSON-LD LocalBusiness schema (sitewide)
- FAQ schema where used

## Forms & lead capture
### Fastest option (static)
Use a form backend service (Formspree/Getform/etc.) and route submissions to your email/CRM.

### More control (server)
If you want to self-handle submissions, Astro can deploy with a Node adapter and support server-side routes.

## Alternative stack (if you know you have Node hosting)
Next.js is also viable. Note: Next.js system requirements can change; consult current docs for minimum Node version.

---

## Repo hygiene
Add these from day one:
- `.editorconfig`
- `.gitignore`
- `README.md`
- `LICENSE` (optional)

## Definition of done (repo setup)
- `npm run dev` starts locally
- Tailwind is working
- A base layout exists with header/footer
- Docs are committed under `/docs`
