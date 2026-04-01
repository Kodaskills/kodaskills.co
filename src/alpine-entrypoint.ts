import intersect from "@alpinejs/intersect";
import type { Alpine } from "alpinejs";

type ThemeMode = "system" | "dark" | "light";
interface ThemeStore {
  mode: ThemeMode;
  set(mode: ThemeMode): void;
  init(): void;
}

interface LangStore {
  current: string;
  pathname: string;
  pathFor(locale: string): string;
  update(): void;
}

declare module "alpinejs" {
  interface Stores {
    theme: ThemeStore;
    lang: LangStore;
  }
}

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);

  // ── Theme store ───────────────────────────────────────────────
  Alpine.store("theme", {
    mode: (localStorage.getItem("theme-mode") as ThemeMode) ?? "system",

    set(this: ThemeStore, mode: ThemeMode) {
      this.mode = mode;
      localStorage.setItem("theme-mode", mode);

      const html = document.documentElement;
      html.classList.add("theme-transitioning");
      html.classList.remove("dark", "light");
      const isDark =
        mode === "dark" ||
        (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      html.classList.add(isDark ? "dark" : "light");
      setTimeout(() => html.classList.remove("theme-transitioning"), 350);
    },

    init(this: ThemeStore) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e: MediaQueryListEvent) => {
          if (this.mode === "system") {
            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add(e.matches ? "dark" : "light");
          }
        });
    },
  });

  // ── Language store ────────────────────────────────────────────
  Alpine.store("lang", {
    current: document.documentElement.lang,
    pathname: window.location.pathname,

    pathFor(this: LangStore, locale: string) {
      const altLink = document.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${locale}"]`
      );
      if (altLink) {
        return new URL(altLink.href).pathname;
      }
      const stripped = this.pathname.replace(new RegExp(`^/${this.current}(?=/|$)`), "") || "/";
      return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
    },

    update(this: LangStore) {
      this.current = document.documentElement.lang;
      this.pathname = window.location.pathname;
    },
  });
};
