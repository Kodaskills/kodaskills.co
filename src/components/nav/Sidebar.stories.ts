import BlockDecorator from "../BlockDecorator.astro";
import SidebarComponent from "./Sidebar.astro";

export default { component: SidebarComponent };

export const Sidebar = {
  args: { activePage: "home" },
  decorators: [{ component: BlockDecorator }],
};
