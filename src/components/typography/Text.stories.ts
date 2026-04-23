import Showcase from "@components/astrobook/Showcase.astro";
import Text from "./Text.astro";

export default { component: Showcase };

export const Variants = {
  args: {
    component: Text,
    layout: "stack",
    type: "text",
    items: [
      {
        label: "lg",
        props: {
          variant: "lg",
          text: "Large body text for emphasizing important content.",
        },
      },
      {
        label: "md",
        props: {
          variant: "md",
          text: "Medium body text for general content and paragraphs.",
        },
      },
      {
        label: "sm",
        props: { variant: "sm", text: "Small text for secondary information." },
      },
      {
        label: "xs",
        props: { variant: "xs", text: "Extra small text for fine print." },
      },
      { label: "label", props: { variant: "label", text: "Label Text" } },
      {
        label: "caption",
        props: { variant: "caption", text: "Caption text for images" },
      },
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
        variant: "md",
        class: color === "default" ? "" : `text-${color}`,
        text: `${capitalize(color)} text`,
      },
    });
  });
  return items;
}

export const Colors = {
  args: {
    component: Text,
    layout: "stack",
    type: "text",
    items: getColorItems(),
  },
};

const weightOptions = ["regular", "medium", "semibold", "bold"];

function getWeightItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  weightOptions.forEach((weight) => {
    items.push({
      label: weight,
      props: { variant: "md", weight: weight, text: `${capitalize(weight)} weight` },
    });
  });
  return items;
}

export const Weights = {
  args: {
    component: Text,
    layout: "stack",
    type: "text",
    items: getWeightItems(),
  },
};
