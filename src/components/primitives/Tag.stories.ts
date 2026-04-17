import Showcase from "@components/astrobook/Showcase.astro";
import Tag from "./Tag.astro";

export default { component: Showcase };

const colorOptions = ["default", "primary", "secondary", "tertiary", "error"];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getOutlinedItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  colorOptions.forEach((color) => {
    items.push({
      label: capitalize(color),
      props: {
        text: color === "error" ? "SYS_STATUS: CRITICAL" : "SCALABILITY_L2",
        variant: "outlined",
        color: color,
      },
    });
  });
  return items;
}

export const Outlined = {
  args: {
    component: Tag,
    layout: "stack",
    items: getOutlinedItems(),
  },
};

function getFilledItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  colorOptions.forEach((color) => {
    items.push({
      label: capitalize(color),
      props: {
        text: color === "error" ? "SYS_STATUS: CRITICAL" : "Rust",
        variant: "filled",
        color: color,
      },
    });
  });
  return items;
}

export const Filled = {
  args: {
    component: Tag,
    layout: "stack",
    items: getFilledItems(),
  },
};
