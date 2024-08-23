import * as path from "path";
import { defineConfig } from "vite";
import ts from "rollup-plugin-typescript2";
import eslint from "@rollup/plugin-eslint";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import { getDefaultLibFileName } from "typescript";
import { variablesConfigPlugin } from './src/plugins/vite-plugin-variables-config';


const styledComponentsTransformer = createStyledComponentsTransformer({
  displayName: true,
});


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
              rename: "package.json"
            },
          ],
          hook: "writeBundle", 
        }),
        ts({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          transformers: [
            () => ({
              before: [styledComponentsTransformer],
            }),
          ],
        }),
        eslint({
          include: ["src/**/*.ts", "src/**/*.tsx"],
          exclude: ["node_modules/**", "build/**", "src/**/*.stories.tsx"], 
        }),
        svgr(),
      ],
    },
    outDir: "build",
    sourcemap: true,
    assetsDir: "assets",
  },
  plugins: [
    variablesConfigPlugin({ tokenPath: './build-tokens/web/ComponentPopoyoko' }), 
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ]
  }
});