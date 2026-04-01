# ── dev stage ──────────────────────────────────────────────────────────────────
FROM oven/bun:alpine AS dev
WORKDIR /app
RUN apk add --no-cache git
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
