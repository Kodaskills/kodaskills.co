import { defineConfig } from "astro/config";
import icon from "astro-icon";
import astrobook from "astrobook";
import UnoCSS from "unocss/astro";

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
	// Empty source dir — no pages to collide with Astrobook's own routes
	srcDir: "./",

	integrations: [
		icon(),
		UnoCSS(),
		astrobook({
			directory: "src/components",
			title: "Kodaskills\r\nDesign System",
			// Inject design tokens, patterns, and Google Fonts @import
			// (fonts are imported via @import in global.css to avoid Vite module errors)
			css: ["./src/styles/global.css"],
		}),
	],
	vite: {
		server: {
			watch: { usePolling: true }, // required for hot-reload inside Docker
		},
	},
});
