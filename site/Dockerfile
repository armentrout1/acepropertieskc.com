# Stage 1: Build Astro site and run SEO preflight gate
FROM node:20-bookworm-slim AS builder

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run seo:preflight

# Stage 2: Serve static assets with nginx
FROM nginx:1.27-alpine AS runner

# Copy custom nginx config template so nginx can substitute $PORT at runtime
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Copy built static assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
