import Showcase from "@components/astrobook/Showcase.astro";
import { capitalize } from "@lib/utils";
import unoConfig from "../../../uno.config";
import Title, { type TitleProps } from "./Title.astro";

export default { component: Showcase };

interface item {
  label: string;
  props: TitleProps;
}

const excludePrefixes = ["on-", "inverse-", "surface"];

const cOptions = Object.keys(unoConfig?.theme?.colors ?? {})
  .filter((key) => excludePrefixes.every((prefix) => !key.startsWith(prefix)))
  .map((key) => `text-${key}`);

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

const colorItems: item[] = cOptions.map((color) => ({
  label: color,
  props: {
    variant: "h1",
    class: color,
    text: `${capitalize(color)} Title`,
  },
}));

export const Colors = {
  args: {
    component: Title,
    layout: "stack",
    type: "text",
    items: colorItems,
  },
};
