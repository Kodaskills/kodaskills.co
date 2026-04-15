import { fileURLToPath, URL } from "node:url";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import cookieconsent from "@jop-software/astro-cookieconsent";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import swup, { Theme } from "@swup/astro";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import UnoCSS from "unocss/astro";

import cookieconsentConfig from "./src/cookieconsent.config";

export default defineConfig({
	site: "https://kodaskills.co",
	output: "static",
	image: {
		remotePatterns: [{ hostname: "lh3.googleusercontent.com" }],
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		icon(),
		mdx(),
		UnoCSS(),
		swup({ theme: Theme.fade }),
		alpinejs({ entrypoint: "/src/alpine-entrypoint" }),
		sentry(),
		spotlightjs(),
		cookieconsent(cookieconsentConfig),
	],
	vite: {
		resolve: {
			alias: {
				"@components": fileURLToPath(
					new URL("./src/components", import.meta.url),
				),
				"@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
				"@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
				"@i18n": fileURLToPath(new URL("./src/i18n", import.meta.url)),
				"@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
			},
		},
		optimizeDeps: {
			// Pre-bundle Swup before Spotlight triggers a second optimisation pass.
			// Without this, the hash in the injected script tag becomes stale after
			// Spotlight re-runs dep optimisation, causing "Failed to fetch dynamically
			// imported module" on every dev server restart.
			include: ["swup", "@swup/astro > swup"],
		}
	},
});
