import Sidebar from "./Sidebar.astro";
import SidebarDecorator from "./SidebarDecorator.astro";

export default { component: Sidebar };

export const Default = {
  args: { activePage: "home" },
  decorators: [{ component: SidebarDecorator }],
};
