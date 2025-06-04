import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";

export function getCSPString(): string {
  const file = fs.readFileSync(path.resolve(".csp.yml"), "utf8");
  const cspObject = load(file) as Record<string, string>;

  return Object.entries(cspObject)
    .map(([key, value]) => `${key} ${value}`)
    .join("; ");
}

export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}
