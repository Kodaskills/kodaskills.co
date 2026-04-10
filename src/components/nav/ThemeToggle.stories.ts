import Showcase from "../Showcase.astro";
import ThemeToggle from "./ThemeToggle.astro";

export default { component: Showcase };

export const Default = {
  args: {
    component: ThemeToggle,
    layout: "stack",
    items: [
      {
        label: "ThemeToggle",
        props: {},
      },
    ],
  },
};
