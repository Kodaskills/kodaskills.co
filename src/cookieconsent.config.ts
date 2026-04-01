import type { CookieConsentConfig } from "vanilla-cookieconsent";

/**
 * Cookie consent configuration for GDPR (EU) and CCPA (California) compliance.
 *
 * Categories:
 *  - necessary    : technical cookies required for the site to function (localStorage: theme, language)
 *  - functionality: user-preference cookies that enhance the experience
 *  - analytics    : PostHog analytics — opt-in only, disabled by default
 *
 * Legal pages (EN — default):
 *  - /privacy-policy   (Privacy Policy)
 *  - /legal-notice     (Legal Notice)
 *  - /terms-of-use     (Terms of Use)
 *
 * Legal pages (FR):
 *  - /politique-de-confidentialite
 *  - /mentions-legales
 *  - /cgu
 */
const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom right",
      equalWeightButtons: false,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: false,
      flipButtons: true,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {
      enabled: true,
    },
    analytics: {
      enabled: true,
      autoClear: {
        cookies: [{ name: /^ph_/ }],
      },
    },
  },

  language: {
    default: "en",
    autoDetect: "document",
    translations: {
      en: {
        consentModal: {
          title: "COOKIE_CONSENT",
          description:
            "We use cookies to keep the site running smoothly, remember your preferences, and detect errors so we can deliver the best possible experience. No data is sold or shared with third parties.",
          closeIconLabel: "Close",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer:
            '<a href="/privacy-policy">Privacy Policy</a>\n<a href="/terms-of-use">Terms of Use</a>',
        },
        preferencesModal: {
          title: "Cookie Preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "Kodaskills uses cookies and local storage to provide a reliable experience and, optionally, to understand how visitors interact with the site. You can choose which categories to enable below.",
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These are essential for the site to function — they store your theme preference and language selection. They cannot be disabled.",
              linkedCategory: "necessary",
            },
            {
              title: "Functionality Cookies",
              description:
                "These cookies remember your preferences across sessions (e.g. sidebar state) to improve your experience. No personal data leaves your browser.",
              linkedCategory: "functionality",
            },
            {
              title: "Analytics Cookies",
              description:
                "We use PostHog to understand how visitors navigate the site — page views, session duration, and feature usage. All data is anonymised and never sold. Enabling this helps us improve the product.",
              linkedCategory: "analytics",
            },
            {
              title: "More information",
              description:
                'For any questions regarding our cookie policy, please <a class="cc__link" href="/privacy-policy">read our Privacy Policy</a> or <a class="cc__link" href="mailto:legal@kodaskills.co">contact us</a>.',
            },
          ],
        },
      },

      fr: {
        consentModal: {
          title: "CONSENTEMENT_COOKIES",
          description:
            "Nous utilisons des cookies pour assurer le bon fonctionnement du site, mémoriser vos préférences et détecter d'éventuelles erreurs afin de vous offrir la meilleure expérience possible. Aucune donnée n'est vendue ni partagée avec des tiers.",
          closeIconLabel: "Fermer",
          acceptAllBtn: "Tout accepter",
          acceptNecessaryBtn: "Tout rejeter",
          showPreferencesBtn: "Gérer les préférences",
          footer:
            '<a href="/fr/politique-de-confidentialite">Politique de confidentialité</a>\n<a href="/fr/cgu">Conditions d\'utilisation</a>',
        },
        preferencesModal: {
          title: "Préférences cookies",
          acceptAllBtn: "Tout accepter",
          acceptNecessaryBtn: "Tout rejeter",
          savePreferencesBtn: "Sauvegarder",
          closeIconLabel: "Fermer",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Utilisation des cookies",
              description:
                "Kodaskills utilise des cookies et le stockage local pour offrir une expérience fiable et, optionnellement, pour comprendre comment les visiteurs utilisent le site. Vous pouvez choisir les catégories à activer ci-dessous.",
            },
            {
              title:
                'Cookies strictement nécessaires <span class="pm__badge">Toujours activé</span>',
              description:
                "Indispensables au fonctionnement du site : ils mémorisent votre thème et votre langue. Ils ne peuvent pas être désactivés.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies de fonctionnalité",
              description:
                "Ces cookies mémorisent vos préférences entre les sessions (ex. état de la barre latérale) pour améliorer votre expérience. Aucune donnée personnelle ne quitte votre navigateur.",
              linkedCategory: "functionality",
            },
            {
              title: "Cookies analytiques",
              description:
                "Nous utilisons PostHog pour comprendre comment les visiteurs naviguent sur le site — pages vues, durée de session, utilisation des fonctionnalités. Toutes les données sont anonymisées et jamais vendues. Les activer nous aide à améliorer le produit.",
              linkedCategory: "analytics",
            },
            {
              title: "Plus d'informations",
              description:
                'Pour toute question sur notre politique de cookies, veuillez <a class="cc__link" href="/fr/politique-de-confidentialite">consulter notre politique de confidentialité</a> ou <a class="cc__link" href="mailto:legal@kodaskills.co">nous contacter</a>.',
            },
          ],
        },
      },
    },
  },
};

export default config;
