import Showcase from "@components/astrobook/Showcase.astro";
import Tooltip from "./Tooltip.astro";

export default { component: Showcase };

const variantOptions = ["default", "primary", "secondary", "tertiary", "error"];

const placementOptions = ["left", "right", "top", "bottom"];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getVariantItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  variantOptions.forEach((variant, index) => {
    items.push({
      label: variant,
      props: {
        content: "MODULE_IDENTIFIER",
        variant: variant,
        placement: index % 2 === 0 ? "left" : "right",
      },
    });
  });
  return items;
}

export const Variants = {
  args: {
    component: Tooltip,
    layout: "grid",
    type: "hover",
    items: getVariantItems(),
  },
};

function getPlacementItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  placementOptions.forEach((placement) => {
    items.push({
      label: capitalize(placement),
      props: {
        content: "MODULE_IDENTIFIER",
        variant: "default",
        placement: placement,
      },
    });
  });
  return items;
}

export const Placements = {
  args: {
    component: Tooltip,
    layout: "grid",
    type: "hover",
    items: getPlacementItems(),
  },
};
