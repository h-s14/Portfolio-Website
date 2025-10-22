# Define the base image
FROM node:20.11.1-alpine AS base

# Install pnpm globally in the base stage
RUN corepack enable && corepack prepare pnpm@9.4.0 --activate

# Builder stage
FROM base AS builder
RUN apk add --no-cache libc6-compat python3 make g++ cairo-dev jpeg-dev pango-dev giflib-dev
RUN apk update
WORKDIR /app
RUN yarn global add turbo
COPY . .

# Install and cache dependencies for all workspaces
RUN pnpm install --frozen-lockfile

# Build only the main workspace
RUN pnpm run build:main

# Installer stage to install isolated dependencies for deployment
FROM base AS installer
WORKDIR /app
COPY --from=builder /app ./

# Install only production dependencies using pnpm
RUN pnpm install --prod --frozen-lockfile

# Runner for `main`
FROM base AS main_runner
WORKDIR /app

# Add runtime dependencies needed for production (no dev/build deps)
RUN apk add --no-cache libc6-compat cairo jpeg pango giflib

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy `main` build output
COPY --from=installer /app/apps/main/.next/standalone ./next/standalone
COPY --from=installer /app/apps/main/.next/static ./next/standalone/apps/main/.next/static
COPY --from=installer /app/apps/main/public ./next/standalone/apps/main/public

# Fix permissions for cache directory
RUN mkdir -p /app/next/standalone/apps/main/.next/cache
RUN chown -R nextjs:nodejs /app/next

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "next/standalone/apps/main/server.js"]
