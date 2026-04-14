import BlockDecorator from "../BlockDecorator.astro";
import Header from "./Header.astro";

export default { component: Header };

export const Default = {
  args: { activePage: "home" },
  decorators: [{ component: BlockDecorator }],
};
