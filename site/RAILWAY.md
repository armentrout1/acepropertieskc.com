# Railway Deployment Notes

- **Root directory:** `site`
- **Build & deploy:** set Railway to use the provided `Dockerfile` (disable Nixpacks auto-detect). The Docker build runs `npm ci`, `npm run seo:preflight`, and publishes the `dist/` bundle into the nginx image.
- **Start command:** handled automatically by nginx (`CMD ["nginx", "-g", "daemon off;"]`). No custom start command needed in Railway.
- **Health check:** `/robots.txt` is a reliable static asset that ships with each build, so configure Railway's health check to hit `https://acepropertieskc.com/robots.txt` (or `/` if a root check is preferred).

This setup serves the Astro-generated static site directly from nginx with canonical domain and trailing-slash redirects baked into `nginx/default.conf`.
