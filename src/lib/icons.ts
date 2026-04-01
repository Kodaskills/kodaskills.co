/**
 * Semantic icon registry.
 * Maps business/UI names to Iconify icon IDs.
 *
 * To swap the icon set globally:
 * - Update the values below to new "set:icon-name" pairs
 * - No component changes needed
 *
 * Browse icons: https://iconify.design
 */
export const ICON_REGISTRY = {
  // Theme toggle
  "theme-auto": "material-symbols:brightness-auto",
  "theme-dark": "material-symbols:dark-mode",
  "theme-light": "material-symbols:light-mode",

  // Navigation
  "nav-skills": "material-symbols:terminal",
  "nav-memory": "material-symbols:memory",
  "nav-lab": "material-symbols:biotech",
  "nav-security": "material-symbols:security",
  "nav-expand": "material-symbols:chevron-right",

  // CTAs
  "cta-arrow": "material-symbols:arrow-forward",
  "cta-rocket": "material-symbols:rocket-launch",
  "cta-bolt": "material-symbols:bolt",
  "cta-send": "material-symbols:send",

  // Card / feature icons
  "card-strategy": "material-symbols:schema",
  "card-infra": "material-symbols:account-tree",
  "card-encrypted": "material-symbols:encrypted",
  "card-cto": "material-symbols:precision-manufacturing",
  "card-leadership": "material-symbols:leaderboard",
  "card-product": "material-symbols:inventory-2",
  "card-dns": "material-symbols:dns",
  "card-ai": "material-symbols:psychology",
  "card-verified": "material-symbols:verified",
  "card-audit": "material-symbols:biotech",
  "card-hub": "material-symbols:hub",
  "card-bolt": "material-symbols:bolt",
  "card-analytics": "material-symbols:analytics",
  "card-handshake": "material-symbols:handshake",
  "card-security": "material-symbols:security",
  "card-shield": "material-symbols:security-update-good",
  "card-finops": "material-symbols:savings",

  // Social
  "social-github": "mdi:github",
  "social-linkedin": "mdi:linkedin",
  "social-x": "ri:twitter-x-fill",
  "social-youtube": "mdi:youtube",

  // Language flags
  "flag-en": "circle-flags:uk",
  "flag-fr": "circle-flags:fr",

  // Alerts
  "alert-warning": "material-symbols:warning",
  "alert-error": "material-symbols:error",
  "alert-info": "material-symbols:info",
  "alert-success": "material-symbols:check-circle",
} as const;

export type IconName = keyof typeof ICON_REGISTRY;
