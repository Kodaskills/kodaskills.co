import Showcase from "../Showcase.astro";
import FooterComponent from "./Footer.astro";

export default { component: Showcase };

export const Footer = {
  args: {
    component: FooterComponent,
    layout: "row",
    items: [
      {
        label: "Main Footer",
        props: {},
      },
    ],
  },
};
