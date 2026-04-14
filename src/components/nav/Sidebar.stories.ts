import BlockDecorator from "../BlockDecorator.astro";
import Sidebar from "./Sidebar.astro";

export default { component: Sidebar };

export const Default = {
  args: { activePage: "home" },
  decorators: [{ component: BlockDecorator }],
};
