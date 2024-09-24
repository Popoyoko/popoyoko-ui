import * as path from "node:path";
import { defineConfig } from "vite";
import ts from "rollup-plugin-typescript2";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";
// import { getDefaultLibFileName } from "typescript";
import { variablesConfigPlugin } from "./src/plugins/vite-plugin-variables-config";
import { designTokens } from "./src/plugins/vite-plugin-design-tokens";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "popoyoko-ui",
      formats: ["es", "cjs"],
      fileName: (format) => `popoyoko-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: "src/Icons",
              dest: "build",
            },
            {
              src: "library-package.json",
              dest: "build/",
              rename: "package.json",
            },
            {
              src: "./popoyoko-default-variables",
              dest: "build",
            },
            {
              src: "src/tokens-config/tokens-path.json",
              dest: "build/tokens-config",
            },
          ],
          hook: "writeBundle",
        }),
        ts({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
        }),
        svgr(),
      ],
    },
    outDir: "build",
    sourcemap: true,
    assetsDir: "assets",
  },
  plugins: [designTokens("./node_modules/branding/tokens/")],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
