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

# Copy custom nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built static assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
