import type { Plugin } from "vite";

import { buildTokens } from "build-tokens";

export function designTokens(tokensPath: string): Plugin {
  console.log("Tokens path : ", tokensPath);

  buildTokens(tokensPath);

  return {
    name: "design-tokens",
  };
}
