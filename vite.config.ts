import * as path from "path";
import { defineConfig } from "vite";
import ts from "rollup-plugin-typescript2";
import eslint from "@rollup/plugin-eslint";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import { getDefaultLibFileName } from "typescript";
import { variablesConfigPlugin } from './vite-plugin-variables-config';


const styledComponentsTransformer = createStyledComponentsTransformer({
  displayName: true,
});

const tokenPath = './new-tokens/web/ComponentLibra';

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
              dest: "build", // Spécifiez le répertoire "Icons" à l'intérieur de "build"
            },
            {
              src: "library-package.json",
              dest: "build/", // Spécifiez le répertoire "Icons" à l'intérieur de "build"
              rename: "package.json"
            },
          ],
          hook: "writeBundle", // Utilisez le hook "writeBundle" pour copier après la génération du bundle
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
          include: ["src/**/*.ts", "src/**/*.tsx"], // Les fichiers à linter
          exclude: ["node_modules/**", "build/**", "src/**/*.stories.tsx"], // Les fichiers à exclure
        }),
        svgr(),
        variablesConfigPlugin({ tokenPath }),
      ],
    },
    outDir: "build",
    sourcemap: true,
    assetsDir: "assets",
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
});
