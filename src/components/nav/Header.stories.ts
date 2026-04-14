import BlockDecorator from "../BlockDecorator.astro";
import HeaderComponent from "./Header.astro";

export default { component: HeaderComponent };

export const Header = {
  args: { activePage: "home" },
  decorators: [{ component: BlockDecorator }],
};
