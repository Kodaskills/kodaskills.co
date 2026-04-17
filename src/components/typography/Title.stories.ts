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

export const Colors = {
  args: {
    component: Title,
    layout: "stack",
    type: "text",
    items: [
      {
        label: "default",
        props: { variant: "h1", class: "default", text: "Default Title" },
      },
      {
        label: "muted",
        props: { variant: "h1", class: "text-surface-variant", text: "Muted Title" },
      },
      {
        label: "primary",
        props: { variant: "h1", class: "text-primary", text: "Primary Title" },
      },
      {
        label: "secondary",
        props: { variant: "h1", class: "text-secondary", text: "Secondary Title" },
      },
      {
        label: "tertiary",
        props: { variant: "h1", class: "text-tertiary", text: "Tertiary Title" },
      },
      {
        label: "error",
        props: { variant: "h1", class: "text-error", text: "Error Title" },
      },
      {
        label: "on-primary",
        props: { variant: "h1", class: "text-on-primary", text: "On primary Title" },
      },
    ],
  },
};
