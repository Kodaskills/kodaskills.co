import type { ExtractorType } from "@lingui/conf";

/**
 * Custom Lingui extractor for the project's `_("message")` translation calls.
 *
 * The built-in Babel extractor only recognises @lingui/macro calls (t, msg, Trans…).
 * This extractor scans .ts and .astro files for `_("…")` / `_('…')` patterns via
 * regex and feeds them into the catalog.
 */
export const extractor: ExtractorType = {
  match(filename: string): boolean {
    return /\.(ts|astro)$/.test(filename) && !filename.includes("src/extractors/");
  },

  extract(filename, code, onMessageExtracted): void {
    // Match _("string") or _('string') — no template literals, no nested quotes
    const regex = /_\(\s*["']([^"']+)["']\s*\)/g;
    let match: RegExpExecArray | null = regex.exec(code);
    while (match !== null) {
      const line = code.slice(0, match.index).split("\n").length;
      onMessageExtracted({
        id: match[1],
        message: match[1],
        origin: [filename, line],
      });
      match = regex.exec(code);
    }
  },
};
