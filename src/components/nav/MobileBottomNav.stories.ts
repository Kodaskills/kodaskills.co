import BlockDecorator from "../BlockDecorator.astro";
import MobileBottomNavComponent from "./MobileBottomNav.astro";

export default { component: MobileBottomNavComponent };

export const MobileBottomNav = {
  args: { activePage: "home" },
  decorators: [{ component: BlockDecorator }],
};
