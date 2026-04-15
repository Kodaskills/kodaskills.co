import Showcase from "@components/astrobook/Showcase.astro";
import MobileBottomNavComponent from "../nav/MobileBottomNav.astro";

export default { component: Showcase };

export const MobileBottomNav = {
  args: {
    component: MobileBottomNavComponent,
    layout: "stack",
    containerClassName: "w-100 h-150 border border-outline-variant",
    itemClassName:
      "w-full h-full relative flex [&>nav]:absolute [&>nav]:bottom-0 [&>nav]:left-0 [&>nav]:w-full [&>nav]:!md:flex [&>nav]:!hidden [&>nav_a]:!flex-col [&>nav_a]:flex-row",
    items: [
      {
        label: "Mobile Bottom Navigation",
        props: { activePage: "approach" },
      },
    ],
  },
};
