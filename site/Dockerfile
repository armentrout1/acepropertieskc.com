# Build Astro SSR application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage - Node SSR server
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Ensure server binds to Railway's PORT
ENV HOST=0.0.0.0
ENV PORT=8080

# Start the Node SSR server with PORT from environment
CMD ["sh", "-c", "PORT=${PORT:-8080} node dist/server/entry.mjs"]
