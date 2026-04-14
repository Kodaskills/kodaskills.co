import BlockDecorator from "../BlockDecorator.astro";
import MobileBottomNav from "./MobileBottomNav.astro";

export default { component: MobileBottomNav };

export const Default = {
  args: { activePage: "home" },
  decorators: [{ component: BlockDecorator }],
};
