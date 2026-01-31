# Railway Deployment Notes

- **Root directory:** `site`
- **Build & deploy:** Use Dockerfile (Node SSR). The Docker build runs `npm ci`, `npm run build`, and starts the Node server.
- **Start command:** `npm start` (runs `node dist/server/entry.mjs`)
- **Health check:** `/robots.txt` or `/` - both work with SSR
- **Environment variables:** `SENDGRID_API_KEY` (required for email API)

## Node SSR Configuration

The app now runs as a Node.js server using Astro's Node adapter:
- SSR mode enabled (`output: 'server'`)
- API routes work at `/api/*` endpoints
- Server automatically binds to Railway's PORT environment variable

## Legacy nginx Configuration

The `nginx/default.conf` file is **legacy** and no longer used in deployment.
It remains for reference but the Dockerfile now runs a pure Node.js server.
