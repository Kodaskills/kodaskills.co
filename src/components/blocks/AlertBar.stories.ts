import Showcase from "@components/astrobook/Showcase.astro";
import AlertBarComponent from "./AlertBar.astro";

export default { component: Showcase };

const alertVariantOptions = ["tertiary", "primary", "secondary", "error"];

const alertData: Record<string, { title: string; description: string }> = {
  tertiary: {
    title: "EMERGENCY_ACCESS",
    description:
      "Critical system failure? Our rapid response task force is available for immediate deployment.",
  },
  primary: {
    title: "SYSTEM_UPDATE",
    description: "A new version of the diagnostic toolkit is available for deployment.",
  },
  secondary: {
    title: "MAINTENANCE_WINDOW",
    description: "Scheduled maintenance is planned. No action required at this time.",
  },
  error: {
    title: "CRITICAL_FAILURE",
    description: "A fatal error has been detected. Immediate intervention required.",
  },
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getAlertItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  alertVariantOptions.forEach((variant) => {
    items.push({
      label: capitalize(variant),
      props: {
        variant: variant,
        title: alertData[variant].title,
        description: alertData[variant].description,
        href: "/contact",
        ctaLabel: "INITIATE_CONTACT",
        icon: "alert-warning",
      },
    });
  });
  return items;
}

export const AlertBar = {
  args: {
    component: AlertBarComponent,
    layout: "stack",
    items: getAlertItems(),
  },
};
