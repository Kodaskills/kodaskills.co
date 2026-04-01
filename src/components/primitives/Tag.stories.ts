import Showcase from "../Showcase.astro";
import Tag from "./Tag.astro";

export default { component: Showcase };

export const Outlined = {
  args: {
    component: Tag,
    layout: "stack",
    items: [
      {
        label: "Default",
        props: {
          text: "SCALABILITY_L2",
          variant: "outlined",
          color: "default",
        },
      },
      {
        label: "Primary",
        props: {
          text: "SCALABILITY_L2",
          variant: "outlined",
          color: "primary",
        },
      },
      {
        label: "Secondary",
        props: {
          text: "SCALABILITY_L2",
          variant: "outlined",
          color: "secondary",
        },
      },
      {
        label: "Tertiary",
        props: {
          text: "SCALABILITY_L2",
          variant: "outlined",
          color: "tertiary",
        },
      },
      {
        label: "Error",
        props: {
          text: "SYS_STATUS: CRITICAL",
          variant: "outlined",
          color: "error",
        },
      },
    ],
  },
};

export const Filled = {
  args: {
    component: Tag,
    layout: "stack",
    items: [
      {
        label: "Default",
        props: { text: "Rust", variant: "filled", color: "default" },
      },
      {
        label: "Primary",
        props: { text: "Rust", variant: "filled", color: "primary" },
      },
      {
        label: "Secondary",
        props: { text: "Rust", variant: "filled", color: "secondary" },
      },
      {
        label: "Tertiary",
        props: { text: "Rust", variant: "filled", color: "tertiary" },
      },
      {
        label: "Error",
        props: {
          text: "SYS_STATUS: CRITICAL",
          variant: "filled",
          color: "error",
        },
      },
    ],
  },
};
