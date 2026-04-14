import Showcase from "../Showcase.astro";
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
