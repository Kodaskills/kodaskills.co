import Showcase from "@components/astrobook/Showcase.astro";
import Button from "./Button.astro";

export default { component: Showcase };

const variantOptions = ["primary", "outlined", "outlined-primary", "outlined-tertiary"];

const sizeOptions = ["xs", "sm", "md", "lg"];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getVariantItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  const labels: Record<string, string> = {
    primary: "INITIATE_DIAGNOSTIC",
    outlined: "VIEW_METHODOLOGY",
    "outlined-primary": "INITIALIZE_CONTACT",
    "outlined-tertiary": "ACCESS_EMERGENCY_PROTOCOL",
  };
  variantOptions.forEach((variant) => {
    items.push({
      label: capitalize(variant),
      props: { label: labels[variant], variant: variant, size: "md" },
    });
  });
  return items;
}

export const Variants = {
  args: {
    component: Button,
    layout: "stack",
    items: getVariantItems(),
  },
};

function getSizeItems() {
  const items: { label: string; props: Record<string, string> }[] = [];
  const labels: Record<string, string> = {
    xs: "START_DIAGNOSTIC",
    sm: "INITIALIZE_CONTACT",
    md: "INITIATE_DIAGNOSTIC",
    lg: "TRANSMIT_PARAMETERS",
  };
  sizeOptions.forEach((size) => {
    items.push({
      label: size,
      props: { label: labels[size], variant: "primary", size: size },
    });
  });
  return items;
}

export const Sizes = {
  args: {
    component: Button,
    layout: "stack",
    items: getSizeItems(),
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
