import BlockDecorator from "../BlockDecorator.astro";
import FooterComponent from "./Footer.astro";

export default { component: FooterComponent };

export const Footer = {
  args: {},
  decorators: [{ component: BlockDecorator }],
};
