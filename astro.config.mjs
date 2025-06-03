import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// @ts-check
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";

import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

const {
  ASTRO_SERVER_PORT,
  ASTRO_SERVER_HOST,
  ASTRO_SERVER_PREVIEW_PORT,
  NODE_ENV,
} = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

const isProd = NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },

  server: ({ command }) => ({
    port:
      command === "preview"
        ? Number.parseInt(ASTRO_SERVER_PREVIEW_PORT)
        : Number.parseInt(ASTRO_SERVER_PORT),
    host: Boolean(ASTRO_SERVER_HOST === "true"),
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    icon({
      include: {
        ri: ["*"],
      },
    }),
    react(),
    ...[!isProd && keystatic()],
  ],
});
