import Showcase from "../Showcase.astro";
import LanguageToggleComponent from "./LanguageToggle.astro";

export default { component: Showcase };

export const LanguageToggle = {
  args: {
    component: LanguageToggleComponent,
    layout: "stack",
    items: [
      {
        label: "LanguageToggle",
      },
    ],
  },
};
