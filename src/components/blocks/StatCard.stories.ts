import Showcase from "@components/astrobook/Showcase.astro";
import StatCardComponent from "./StatCard.astro";

export default { component: Showcase };

export const StatCard = {
  args: {
    component: StatCardComponent,
    items: [
      {
        label: "Accent",
        props: { value: "50+", label: "SUCCESSFUL_DEPLOYS", variant: "accent" },
      },
      {
        label: "Metric",
        props: { value: "99.9%", label: "Availability_SLA", variant: "metric" },
      },
    ],
  },
};
