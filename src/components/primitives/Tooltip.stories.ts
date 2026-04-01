import Showcase from "../Showcase.astro";
import Tooltip from "./Tooltip.astro";

export default { component: Showcase };

export const Variants = {
  args: {
    component: Tooltip,
    layout: "grid",
    type: "hover",
    items: [
      {
        label: "Default",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "default",
          placement: "left",
        },
      },
      {
        label: "Primary",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "primary",
          placement: "right",
        },
      },
      {
        label: "Secondary",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "secondary",
          placement: "left",
        },
      },
      {
        label: "Tertiary",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "tertiary",
          placement: "right",
        },
      },
      {
        label: "Error",
        props: {
          content: "SYS_STATUS: CRITICAL",
          variant: "error",
          placement: "left",
        },
      },
    ],
  },
};

export const Placements = {
  args: {
    component: Tooltip,
    layout: "grid",
    type: "hover",
    items: [
      {
        label: "Left",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "default",
          placement: "left",
        },
      },
      {
        label: "Right",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "default",
          placement: "right",
        },
      },
      {
        label: "Top",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "default",
          placement: "top",
        },
      },
      {
        label: "Bottom",
        props: {
          content: "MODULE_IDENTIFIER",
          variant: "default",
          placement: "bottom",
        },
      },
    ],
  },
};
