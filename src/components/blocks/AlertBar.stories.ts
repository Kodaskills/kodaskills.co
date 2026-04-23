import Showcase from "@components/astrobook/Showcase.astro";
import { capitalize } from "@lib/utils";
import AlertBarComponent, { type AlertBarProps, type AlertBarVariant } from "./AlertBar.astro";

export default { component: Showcase };

const alertVariantOptions: AlertBarVariant[] = ["tertiary", "primary", "secondary", "error"];

interface item {
  label: string;
  props: AlertBarProps;
}

type dataVariant = Pick<AlertBarProps, "title" | "description">;

function dataForVariant(variant: AlertBarVariant): dataVariant {
  if (variant === "tertiary") {
    return {
      title: "EMERGENCY_ACCESS",
      description:
        "Critical system failure? Our rapid response task force is available for immediate deployment.",
    };
  } else if (variant === "primary") {
    return {
      title: "SYSTEM_UPDATE",
      description: "A new version of the diagnostic toolkit is available for deployment.",
    };
  } else if (variant === "secondary") {
    return {
      title: "MAINTENANCE_WINDOW",
      description: "Scheduled maintenance is planned. No action required at this time.",
    };
  } else {
    //error
    return {
      title: "CRITICAL_FAILURE",
      description: "A fatal error has been detected. Immediate intervention required.",
    };
  }
}

const items: item[] = alertVariantOptions.map((variant) => {
  const variantData = dataForVariant(variant);
  return {
    label: capitalize(variant),
    props: {
      variant: variant,
      title: `${capitalize(variantData.title)}_ALERT`,
      description: variantData.description,
      href: "/contact",
      ctaLabel: "LEARN_MORE",
      icon: "alert-warning",
    },
  };
});

export const AlertBar = {
  args: {
    component: AlertBarComponent,
    layout: "stack",
    items,
  },
};
