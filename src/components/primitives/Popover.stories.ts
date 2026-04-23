import Showcase from "@components/astrobook/Showcase.astro";
import Popover from "./Popover.astro";

export default { component: Showcase };

const popoverVariantOptions = ["primary", "secondary", "tertiary", "neutral"];

const popoverPlacementOptions = ["left", "right", "top", "top-start"];

const popoverData: Record<string, { title: string; content: string }> = {
  primary: { title: "Leadership", content: "CTO as a Service · Strategy · Tech Lead" },
  secondary: { title: "Product", content: "Full & Part-time Product Development" },
  tertiary: { title: "Advisory", content: "On-Demand Expertise" },
  neutral: { title: "AI", content: "AI Adoption · Workflows · Upskilling" },
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getVariantItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  popoverVariantOptions.forEach((variant) => {
    items.push({
      label: capitalize(variant),
      props: {
        title: popoverData[variant].title,
        content: popoverData[variant].content,
        variant: variant,
        placement: "right",
      },
    });
  });
  return items;
}

export const Variants = {
  args: {
    component: Popover,
    layout: "stack",
    type: "hover",
    items: getVariantItems(),
  },
};

function getPlacementItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  const placementData: Record<string, { title: string; content: string }> = {
    left: { title: "Security", content: "Security · Compliance · Monitoring" },
    right: { title: "Leadership", content: "CTO as a Service · Strategy · Tech Lead" },
    top: { title: "Ops", content: "Architecture · Scaling · Cloud · On-Prem" },
    "top-start": { title: "AI", content: "AI Adoption · Workflows · Upskilling" },
  };
  popoverPlacementOptions.forEach((placement) => {
    items.push({
      label: capitalize(placement),
      props: {
        title: placementData[placement].title,
        content: placementData[placement].content,
        variant: "primary",
        placement: placement,
      },
    });
  });
  return items;
}

export const Placements = {
  args: {
    component: Popover,
    layout: "grid",
    type: "hover",
    items: getPlacementItems(),
  },
};
