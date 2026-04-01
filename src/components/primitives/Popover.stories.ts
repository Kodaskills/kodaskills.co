import Showcase from "../Showcase.astro";
import Popover from "./Popover.astro";

export default { component: Showcase };

export const Variants = {
  args: {
    component: Popover,
    layout: "stack",
    type: "hover",
    items: [
      {
        label: "Primary",
        props: {
          title: "Leadership",
          content: "CTO as a Service · Strategy · Tech Lead",
          variant: "primary",
          placement: "right",
        },
      },
      {
        label: "Secondary",
        props: {
          title: "Product",
          content: "Full & Part-time Product Development",
          variant: "secondary",
          placement: "right",
        },
      },
      {
        label: "Tertiary",
        props: {
          title: "Advisory",
          content: "On-Demand Expertise",
          variant: "tertiary",
          placement: "right",
        },
      },
      {
        label: "Neutral",
        props: {
          title: "AI",
          content: "AI Adoption · Workflows · Upskilling",
          variant: "neutral",
          placement: "right",
        },
      },
    ],
  },
};

export const Placements = {
  args: {
    component: Popover,
    layout: "grid",
    type: "hover",
    items: [
      {
        label: "Right",
        props: {
          title: "Leadership",
          content: "CTO as a Service · Strategy · Tech Lead",
          variant: "primary",
          placement: "right",
        },
      },
      {
        label: "Left",
        props: {
          title: "Security",
          content: "Security · Compliance · Monitoring",
          variant: "primary",
          placement: "left",
        },
      },
      {
        label: "Top",
        props: {
          title: "Ops",
          content: "Architecture · Scaling · Cloud · On-Prem",
          variant: "primary",
          placement: "top",
        },
      },
      {
        label: "Top Start",
        props: {
          title: "AI",
          content: "AI Adoption · Workflows · Upskilling",
          variant: "primary",
          placement: "top-start",
        },
      },
    ],
  },
};
