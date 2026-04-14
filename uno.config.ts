import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
 	content: {
		pipeline: {
			include: [
				// UnoCSS defaults (astro, vue, svelte, tsx, etc.)
				/\.(vue|svelte|[jt]sx?|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// also extract from story files
				/\.stories\.ts$/,
			],
		},
	},
	presets: [presetWind4()],
	theme: {
		colors: {
			// ── Surface hierarchy ──
			surface: {
				DEFAULT: "var(--color-surface)",
				dim: "var(--color-surface-dim)",
				bright: "var(--color-surface-bright)",
				variant: "var(--color-surface-variant)",
				tint: "var(--color-surface-tint)",
				container: {
					DEFAULT: "var(--color-surface-container)",
					lowest: "var(--color-surface-container-lowest)",
					low: "var(--color-surface-container-low)",
					high: "var(--color-surface-container-high)",
					highest: "var(--color-surface-container-highest)",
				},
			},
			// ── On-surface ──
			"on-surface": {
				DEFAULT: "var(--color-on-surface)",
				variant: "var(--color-on-surface-variant)",
			},
			background: "var(--color-background)",
			"on-background": "var(--color-on-background)",
			// ── Outlines ──
			outline: {
				DEFAULT: "var(--color-outline)",
				variant: "var(--color-outline-variant)",
			},
			// ── Primary (cyan) ──
			primary: {
				DEFAULT: "var(--color-primary)",
				dim: "var(--color-primary-dim)",
				fixed: "var(--color-primary-fixed)",
				"fixed-dim": "var(--color-primary-fixed-dim)",
				container: "var(--color-primary-container)",
			},
			"on-primary": {
				DEFAULT: "var(--color-on-primary)",
				container: "var(--color-on-primary-container)",
				fixed: "var(--color-on-primary-fixed)",
				"fixed-variant": "var(--color-on-primary-fixed-variant)",
			},
			"inverse-primary": "var(--color-inverse-primary)",
			// ── Secondary ──
			secondary: {
				DEFAULT: "var(--color-secondary)",
				dim: "var(--color-secondary-dim)",
				fixed: "var(--color-secondary-fixed)",
				"fixed-dim": "var(--color-secondary-fixed-dim)",
				container: "var(--color-secondary-container)",
			},
			"on-secondary": {
				DEFAULT: "var(--color-on-secondary)",
				container: "var(--color-on-secondary-container)",
				fixed: "var(--color-on-secondary-fixed)",
				"fixed-variant": "var(--color-on-secondary-fixed-variant)",
			},
			// ── Tertiary (amber) ──
			tertiary: {
				DEFAULT: "var(--color-tertiary)",
				dim: "var(--color-tertiary-dim)",
				fixed: "var(--color-tertiary-fixed)",
				"fixed-dim": "var(--color-tertiary-fixed-dim)",
				container: "var(--color-tertiary-container)",
			},
			"on-tertiary": {
				DEFAULT: "var(--color-on-tertiary)",
				container: "var(--color-on-tertiary-container)",
				fixed: "var(--color-on-tertiary-fixed)",
				"fixed-variant": "var(--color-on-tertiary-fixed-variant)",
			},
			// ── Error ──
			error: {
				DEFAULT: "var(--color-error)",
				dim: "var(--color-error-dim)",
				container: "var(--color-error-container)",
			},
			"on-error": {
				DEFAULT: "var(--color-on-error)",
				container: "var(--color-on-error-container)",
			},
			// ── Inverse ──
			"inverse-surface": "var(--color-inverse-surface)",
			"inverse-on-surface": "var(--color-inverse-on-surface)",
		},
		font: {
			headline: '"Space Grotesk", sans-serif',
			body: '"Inter", sans-serif',
			label: '"Space Grotesk", sans-serif',
		},
		radius: {
			DEFAULT: "0px",
			sm: "0px",
			md: "0px",
			lg: "0px",
			xl: "0px",
			"2xl": "0px",
			"3xl": "0px",
			full: "9999px",
		},
	},
});
