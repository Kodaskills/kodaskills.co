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

export const Colors = {
  args: {
    component: Text,
    layout: "stack",
    type: "text",
    items: [
      {
        label: "default",
        props: { variant: "md", class: "default", text: "Default text" },
      },
      {
        label: "muted",
        props: { variant: "md", class: "text-surface-variant", text: "Muted text" },
      },
      {
        label: "primary",
        props: { variant: "md", class: "text-primary", text: "Primary text" },
      },
      {
        label: "secondary",
        props: { variant: "md", class: "text-secondary", text: "Secondary text" },
      },
      {
        label: "tertiary",
        props: { variant: "md", class: "text-tertiary", text: "Tertiary text" },
      },
      {
        label: "error",
        props: { variant: "md", class: "text-error", text: "Error text" },
      },
      {
        label: "on-primary",
        props: { variant: "md", class: "text-on-primary", text: "On primary text" },
      },
    ],
  },
};

export const Weights = {
  args: {
    component: Text,
    layout: "stack",
    type: "text",
    items: [
      {
        label: "regular",
        props: { variant: "md", weight: "regular", text: "Regular weight" },
      },
      {
        label: "medium",
        props: { variant: "md", weight: "medium", text: "Medium weight" },
      },
      {
        label: "semibold",
        props: { variant: "md", weight: "semibold", text: "Semibold weight" },
      },
      {
        label: "bold",
        props: { variant: "md", weight: "bold", text: "Bold weight" },
      },
    ],
  },
};
