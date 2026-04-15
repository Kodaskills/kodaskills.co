import { execSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";

export function getPackageVersion(): string {
  try {
    const packagePath = join(process.cwd(), "package.json");
    const content = readFileSync(packagePath, "utf-8");
    return JSON.parse(content).version;
  } catch {
    return "0.0.0";
  }
}

export function getGitCommit(): string {
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf-8" }).trim();
  } catch {
    return "unknown";
  }
}

export function getVersion(): string {
  return `v${getPackageVersion()}-${getGitCommit()}`;
}
