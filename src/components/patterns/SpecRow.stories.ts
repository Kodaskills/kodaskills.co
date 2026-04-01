import Showcase from "../Showcase.astro";
import SpecRowComponent from "./SpecRow.astro";

export default { component: Showcase };

export const SpecRow = {
  args: {
    component: SpecRowComponent,
    layout: "stack",
    items: [
      {
        label: "Default",
        props: { label: "Module", value: "Execution_Sync", highlight: false },
      },
      {
        label: "Highlighted",
        props: { label: "Status", value: "READY", highlight: true },
      },
    ],
  },
};
