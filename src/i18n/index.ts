/**
 * Lingui i18n helper for Astro SSG.
 *
 * Usage in page frontmatter:
 *   const { _, lp } = await useI18n(Astro.currentLocale)
 *
 *   _("Home")        → translated string
 *   lp("/contact")   → locale-prefixed path (/contact or /fr/contact)
 */
import { i18n, type Messages } from "@lingui/core";

export type Locale = "en" | "fr";
export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

/** Load + activate the locale catalog. */
export async function activateLingui(locale: Locale): Promise<void> {
  let messages: Messages;
  if (locale === "fr") {
    messages = (await import("../locales/fr.ts")).messages;
  } else {
    messages = (await import("../locales/en.ts")).messages;
  }
  i18n.load(locale, messages);
  i18n.activate(locale);
}

/**
 * Activate locale and return translation utilities.
 * Call once in the page frontmatter; sub-components re-use the activated singleton.
 */
export async function useI18n(currentLocale: string | undefined) {
  const locale = (currentLocale ?? defaultLocale) as Locale;
  await activateLingui(locale);

  /** Translate a message ID — falls back to the ID when no translation exists. */
  const _ = (id: string): string => i18n._(id);

  /** Build a locale-aware path (English = no prefix). */
  const lp = (path: string): string =>
    locale === defaultLocale ? path : `/${locale}${path === "/" ? "" : path}`;

  return { locale, _, lp };
}

/** Lightweight helper for components that don't call useI18n themselves. */
export function getI18n() {
  const locale = (i18n.locale ?? defaultLocale) as Locale;
  const _ = (id: string): string => i18n._(id);
  const lp = (path: string): string =>
    locale === defaultLocale ? path : `/${locale}${path === "/" ? "" : path}`;
  return { locale, _, lp };
}
