import Showcase from "@components/astrobook/Showcase.astro";
import HeaderComponent from "./Header.astro";

export default { component: Showcase };

export const Header = {
  args: {
    component: HeaderComponent,
    layout: "row",
    containerClassName: "w-full",
    itemClassName: "[&>header]:fixed [&>header]:!left-0 [&>header]:!top-0 [&>header]:!relative",
    items: [
      {
        label: "Main Header",
        props: { activePage: "home" },
      },
    ],
  },
};
