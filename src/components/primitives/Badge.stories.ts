import Showcase from "@components/astrobook/Showcase.astro";
import BadgeComponent from "./Badge.astro";

export default { component: Showcase };

export const Badge = {
  args: {
    component: BadgeComponent,
    layout: "stack",
    items: [
      {
        label: "Primary",
        props: { label: "SYS_STATUS: ACTIVE_ADVISORY", variant: "primary" },
      },
      {
        label: "Secondary",
        props: { label: "SYS_STATUS: IDLE", variant: "secondary" },
      },
      {
        label: "Tertiary",
        props: { label: "SYS_STATUS: WARNING", variant: "tertiary" },
      },
      {
        label: "Error",
        props: { label: "SYS_STATUS: CRITICAL", variant: "error" },
      },
    ],
  },
};
