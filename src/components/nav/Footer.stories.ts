import Footer from "./Footer.astro";
import FooterDecorator from "./FooterDecorator.astro";

export default { component: Footer };

export const Default = {
  args: {},
  decorators: [{ component: FooterDecorator }],
};
