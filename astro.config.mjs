import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

const { ASTRO_SERVER_BASE_PATH = "/", NODE_ENV } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

const isProd = NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  base: ASTRO_SERVER_BASE_PATH,
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },

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
