import Showcase from "../Showcase.astro";
import SectionTitleComponent from "./SectionTitle.astro";

export default { component: Showcase };

export const SectionTitle = {
  args: {
    component: SectionTitleComponent,
    layout: "row",
    items: [{ label: "Default", props: { number: "01", title: "OPERATIONAL_EXPERTISE" } }],
  },
};
