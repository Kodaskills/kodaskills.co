/**
 * @param {import("knip").Configuration} config
 */
const config = {
	$schema: "https://unpkg.com/knip@5/schema.json",
  entry: [
    "*.ts",
    "**/*.ts",
		"**/*.astro"
	],
	project: ["src/**/*.{astro,ts}"],
	ignoreDependencies: [
		"@biomejs/biome",
		"@commitlint/cli",
		"validate-branch-name",
    "@iconify-json/*",
    "@astrojs/check",
		"czg"
	],
	ignoreBinaries: [],
};

export default config;
