import { Link } from "@components/atoms";
import type { MDXComponents } from "mdx/types";

const shared = {
  Link,
} as MDXComponents;

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...shared,
    ...components,
  };
}
