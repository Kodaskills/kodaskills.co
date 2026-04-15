import Showcase from "@components/astrobook/Showcase.astro";
import ThemeToggleComponent from "./ThemeToggle.astro";

export default { component: Showcase };

export const ThemeToggle = {
  args: {
    component: ThemeToggleComponent,
    layout: "stack",
    items: [
      {
        label: "ThemeToggle",
      },
    ],
  },
};
