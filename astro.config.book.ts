import { defineConfig } from "astro/config";
import icon from "astro-icon";
import astrobook from "astrobook";
import UnoCSS from "unocss/astro";
import alpinejs from "@astrojs/alpinejs";

/**
 * Astrobook — isolated component development environment.
 * Run via: just book  →  http://localhost:4322
 *
 * srcDir points to an empty directory so Astro registers no user pages,
 * preventing the route collision with Astrobook's own "/" entry point.
 *
 * Stories are picked up from any *.stories.ts file under src/components/.
 */
export default defineConfig({
	srcDir: "./",
	outDir: "./dist-book",

	integrations: [
		icon(),
    UnoCSS(),
		alpinejs({ entrypoint: "/src/alpine-entrypoint" }),
		astrobook({
      directory: "src/components",
      title: "Design System",
      home: "./src/components/astrobook/BookHome.astro",
      css: ["./src/styles/global.css"],
		}),
	]
});
