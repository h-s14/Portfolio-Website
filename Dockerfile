FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

# Copy the static export generated during the build stage.
COPY --from=builder /app/out ./out

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
