import Showcase from "@components/astrobook/Showcase.astro";
import Title from "./Title.astro";

export default { component: Showcase };

export const Variants = {
  args: {
    component: Title,
    layout: "stack",
    type: "text",
    items: [
      {
        label: "display",
        props: { variant: "display", text: "Display Title" },
      },
      { label: "h1", props: { variant: "h1", text: "Heading Level 1" } },
      { label: "h2", props: { variant: "h2", text: "Heading Level 2" } },
      { label: "h3", props: { variant: "h3", text: "Heading Level 3" } },
      { label: "h4", props: { variant: "h4", text: "Heading Level 4" } },
      { label: "h5", props: { variant: "h5", text: "Heading Level 5" } },
      { label: "h6", props: { variant: "h6", text: "Heading Level 6" } },
    ],
  },
};

const colorOptions = [
  "default",
  "surface-variant",
  "primary",
  "secondary",
  "tertiary",
  "error",
  "on-primary",
];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getColorItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  colorOptions.forEach((color) => {
    items.push({
      label: color,
      props: {
        variant: "h1",
        class: color === "default" ? "" : `text-${color}`,
        text: `${capitalize(color)} Title`,
      },
    });
  });
  return items;
}

export const Colors = {
  args: {
    component: Title,
    layout: "stack",
    type: "text",
    items: getColorItems(),
  },
};
