import Showcase from "@components/astrobook/Showcase.astro";
import AlertBarComponent from "./AlertBar.astro";

export default { component: Showcase };

export const AlertBar = {
  args: {
    component: AlertBarComponent,
    layout: "stack",
    items: [
      {
        label: "Tertiary",
        props: {
          variant: "tertiary",
          title: "EMERGENCY_ACCESS",
          description:
            "Critical system failure? Our rapid response task force is available for immediate deployment.",
          href: "/contact",
          ctaLabel: "INITIATE_CONTACT",
          icon: "alert-warning",
        },
      },
      {
        label: "Primary",
        props: {
          variant: "primary",
          title: "SYSTEM_UPDATE",
          description: "A new version of the diagnostic toolkit is available for deployment.",
          href: "/contact",
          ctaLabel: "INITIATE_CONTACT",
          icon: "alert-warning",
        },
      },
      {
        label: "Secondary",
        props: {
          variant: "secondary",
          title: "MAINTENANCE_WINDOW",
          description: "Scheduled maintenance is planned. No action required at this time.",
          href: "/contact",
          ctaLabel: "INITIATE_CONTACT",
          icon: "alert-warning",
        },
      },
      {
        label: "Error",
        props: {
          variant: "error",
          title: "CRITICAL_FAILURE",
          description: "A fatal error has been detected. Immediate intervention required.",
          href: "/contact",
          ctaLabel: "INITIATE_CONTACT",
          icon: "alert-warning",
        },
      },
    ],
  },
};
