# ── dev stage ──────────────────────────────────────────────────────────────────
FROM oven/bun:alpine AS dev
WORKDIR /app
RUN apk add --no-cache git && git config --global --add safe.directory /app
COPY package.json bun.lock* ./
ARG CI=true
ENV CI=${CI}
RUN bun install
EXPOSE 4321
CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0"]

# ── builder stage ───────────────────────────────────────────────────────────────
FROM dev AS builder
COPY . .
RUN bun run build

# ── production stage (nginx static) ────────────────────────────────────────────
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# ── book builder stage ──────────────────────────────────────────────────────────
FROM dev AS book-builder
COPY . .
RUN bun run build --config astro.config.book.ts

# ── book production stage (nginx static) ───────────────────────────────────────
FROM nginx:alpine AS book-production
COPY --from=book-builder /app/dist-book /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
