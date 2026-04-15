import Showcase from "@components/astrobook/Showcase.astro";
import SidebarComponent from "./Sidebar.astro";

export default { component: Showcase };

export const Sidebar = {
  args: {
    component: SidebarComponent,
    layout: "row",
    containerClassName: "relative bg-surface border-r border-outline-variant overflow-hidden",
    itemClassName:
      "w-full h-full relative flex flex-col [&>aside]:fixed [&>aside]:!left-0 [&>aside]:!top-0 [&>aside]:!relative",
    items: [
      {
        label: "Main Sidebar",
        props: { activePage: "home" },
      },
    ],
  },
};
