import Showcase from "@components/astrobook/Showcase.astro";
import { capitalize } from "@lib/utils";
import AlertBarComponent, { type AlertBarProps, type AlertBarVariant } from "./AlertBar.astro";

export default { component: Showcase };

const alertVariantOptions: AlertBarVariant[] = ["tertiary", "primary", "secondary", "error"];

interface AlertBarData {
  title: string;
  description: string;
}

const alertData: Record<AlertBarVariant, AlertBarData> = {
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

function getAlertItems() {
  const items: { label: string; props: AlertBarProps }[] = [];
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
      } satisfies AlertBarProps,
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
//
