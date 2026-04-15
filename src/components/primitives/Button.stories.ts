import Showcase from "@components/astrobook/Showcase.astro";
import Button from "./Button.astro";

export default { component: Showcase };

export const Variants = {
  args: {
    component: Button,
    layout: "stack",
    items: [
      {
        label: "Primary",
        props: { label: "INITIATE_DIAGNOSTIC", variant: "primary", size: "md" },
      },
      {
        label: "Outlined",
        props: { label: "VIEW_METHODOLOGY", variant: "outlined", size: "md" },
      },
      {
        label: "Outlined Primary",
        props: {
          label: "INITIALIZE_CONTACT",
          variant: "outlined-primary",
          size: "md",
        },
      },
      {
        label: "Outlined Tertiary",
        props: {
          label: "ACCESS_EMERGENCY_PROTOCOL",
          variant: "outlined-tertiary",
          size: "md",
        },
      },
    ],
  },
};

export const Sizes = {
  args: {
    component: Button,
    layout: "stack",
    items: [
      {
        label: "xs",
        props: { label: "START_DIAGNOSTIC", variant: "primary", size: "xs" },
      },
      {
        label: "sm",
        props: { label: "INITIALIZE_CONTACT", variant: "primary", size: "sm" },
      },
      {
        label: "md",
        props: { label: "INITIATE_DIAGNOSTIC", variant: "primary", size: "md" },
      },
      {
        label: "lg",
        props: { label: "TRANSMIT_PARAMETERS", variant: "primary", size: "lg" },
      },
    ],
  },
};

export const WithIcons = {
  args: {
    component: Button,
    layout: "stack",
    items: [
      {
        label: "Icon Left",
        props: {
          label: "LAUNCH_SEQUENCE",
          variant: "primary",
          size: "md",
          iconLeft: "cta-rocket",
        },
      },
      {
        label: "Icon Right",
        props: {
          label: "TRANSMIT_DATA",
          variant: "outlined-primary",
          size: "md",
          iconRight: "cta-send",
        },
      },
      {
        label: "Both Icons",
        props: {
          label: "INITIATE_PROTOCOL",
          variant: "outlined",
          size: "md",
          iconLeft: "cta-bolt",
          iconRight: "cta-arrow",
        },
      },
    ],
  },
};
