import { ICON_REGISTRY } from "@lib/icons";
import Showcase from "../Showcase.astro";
import IconComponent from "./Icon.astro";

export default { component: Showcase };

function buildGroups() {
  const grouped: Record<string, [string, string][]> = {};
  for (const [key, value] of Object.entries(ICON_REGISTRY)) {
    const prefix = key.split("-")[0] ?? "other";
    if (!grouped[prefix]) grouped[prefix] = [];
    grouped[prefix].push([key, value]);
  }
  for (const prefix of Object.keys(grouped)) {
    grouped[prefix].sort((a, b) => a[0].localeCompare(b[0]));
  }
  return Object.keys(grouped)
    .sort((a, b) => a.localeCompare(b))
    .map((type) => ({
      type,
      items: grouped[type].map(([name]) => ({
        label: name
          .slice(type.length + 1)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        props: { name },
      })),
    }));
}

export const Icon = {
  args: {
    component: IconComponent,
    layout: "row",
    groups: buildGroups(),
    containerClassName: "grid grid-cols-4 gap-3",
    itemClassName:
      "flex flex-col items-center gap-2 py-6 px-4 w-28 border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer",
  },
};
