import StoryDecorator from "../StoryDecorator.astro";
import SectionTitleComponent from "./SectionTitle.astro";

export default {
  component: SectionTitleComponent,
};

export const SectionTitle = {
  args: { number: "01", title: "OPERATIONAL_EXPERTISE" },
  decorators: [{ component: StoryDecorator }],
};
