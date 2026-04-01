// Source locale: message IDs are the English text, no translation needed.
import type { Messages } from "@lingui/core";
export const messages = new Proxy({} as Messages, {
  get: (_, key: string) => key,
});
