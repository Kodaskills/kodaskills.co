// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { loadEnv } from "vite";

const { ASTRO_SERVER_PORT, ASTRO_SERVER_HOST, ASTRO_SERVER_PREVIEW_PORT } =
  loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

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
    host: Boolean(ASTRO_SERVER_HOST),
  }),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});
