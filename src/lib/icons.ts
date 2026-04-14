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
  // Alerts
  "alert-error": "material-symbols:error",
  "alert-info": "material-symbols:info",
  "alert-success": "material-symbols:check-circle",
  "alert-warning": "material-symbols:warning",

  // Card / feature icons
  "card-ai": "material-symbols:psychology",
  "card-analytics": "material-symbols:analytics",
  "card-audit": "material-symbols:biotech",
  "card-bolt": "material-symbols:bolt",
  "card-cto": "material-symbols:precision-manufacturing",
  "card-dns": "material-symbols:dns",
  "card-encrypted": "material-symbols:encrypted",
  "card-finops": "material-symbols:savings",
  "card-handshake": "material-symbols:handshake",
  "card-hub": "material-symbols:hub",
  "card-infra": "material-symbols:account-tree",
  "card-leadership": "material-symbols:leaderboard",
  "card-product": "material-symbols:inventory-2",
  "card-security": "material-symbols:security",
  "card-shield": "material-symbols:security-update-good",
  "card-strategy": "material-symbols:schema",
  "card-verified": "material-symbols:verified",

  // CTAs
  "cta-arrow": "material-symbols:arrow-forward",
  "cta-bolt": "material-symbols:bolt",
  "cta-rocket": "material-symbols:rocket-launch",
  "cta-send": "material-symbols:send",

  // Language flags
  "flag-en": "circle-flags:uk",
  "flag-fr": "circle-flags:fr",

  // Navigation
  "nav-expand": "material-symbols:chevron-right",
  "nav-lab": "material-symbols:biotech",
  "nav-memory": "material-symbols:memory",
  "nav-security": "material-symbols:security",
  "nav-skills": "material-symbols:terminal",

  // Social
  "social-github": "mdi:github",
  "social-linkedin": "mdi:linkedin",
  "social-x": "ri:twitter-x-fill",
  "social-youtube": "mdi:youtube",

  // Theme toggle
  "theme-auto": "material-symbols:brightness-auto",
  "theme-dark": "material-symbols:dark-mode",
  "theme-light": "material-symbols:light-mode",
} as const;

export type IconName = keyof typeof ICON_REGISTRY;
