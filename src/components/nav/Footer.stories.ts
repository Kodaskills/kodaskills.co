import BlockDecorator from "../BlockDecorator.astro";
import Footer from "./Footer.astro";

export default { component: Footer };

export const Default = {
  args: {},
  decorators: [{ component: BlockDecorator }],
};
