import type { LinguiConfig } from "@lingui/conf";
import { extractor as underscoreExtractor } from "./src/extractors/underscore";

export default {
	locales: ["fr"],
	sourceLocale: "en",
	catalogs: [
		{
			path: "<rootDir>/src/locales/{locale}",
			include: ["src/**"],
		},
	],
	format: "po",
	compileNamespace: "ts",
	extractors: [underscoreExtractor],
} satisfies LinguiConfig;
