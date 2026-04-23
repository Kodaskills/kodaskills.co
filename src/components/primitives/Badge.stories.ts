import Showcase from "@components/astrobook/Showcase.astro";
import BadgeComponent from "./Badge.astro";

export default { component: Showcase };

const badgeOptions = ["primary", "secondary", "tertiary", "error"];

const statusMessages: Record<string, string> = {
  primary: "SYS_STATUS: ACTIVE_ADVISORY",
  secondary: "SYS_STATUS: IDLE",
  tertiary: "SYS_STATUS: WARNING",
  error: "SYS_STATUS: CRITICAL",
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getBadgeItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  badgeOptions.forEach((variant) => {
    items.push({
      label: capitalize(variant),
      props: { label: statusMessages[variant], variant: variant },
    });
  });
  return items;
}

export const Badge = {
  args: {
    component: BadgeComponent,
    layout: "stack",
    items: getBadgeItems(),
  },
};
