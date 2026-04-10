import Header from "./Header.astro";
import HeaderDecorator from "./HeaderDecorator.astro";

export default { component: Header };

export const Default = {
  args: { activePage: "home" },
  decorators: [{ component: HeaderDecorator }],
};
