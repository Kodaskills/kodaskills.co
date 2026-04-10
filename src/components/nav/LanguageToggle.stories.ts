import Showcase from "../Showcase.astro";
import LanguageToggle from "./LanguageToggle.astro";

export default { component: Showcase };

export const Default = {
  args: {
    component: LanguageToggle,
    layout: "stack",
    items: [
      {
        label: "LanguageToggle",
        props: {},
      },
    ],
  },
};
