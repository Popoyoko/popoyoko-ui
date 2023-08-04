import * as path from "path";
import { defineConfig } from "vite";
import ts from "rollup-plugin-typescript2";
import eslint from "@rollup/plugin-eslint";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "popoyoko-ui-vite",
      formats: ["es", "cjs"],
      fileName: (format) => `popoyoko-ui-vite.${format}.js`,
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
          ],
          hook: "writeBundle", // Utilisez le hook "writeBundle" pour copier après la génération du bundle
        }),
        ts({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
        }),
        eslint({
          include: ["src/**/*.ts", "src/**/*.tsx"], // Les fichiers à linter
          exclude: ["node_modules/**", "build/**", "src/**/*.stories.tsx"], // Les fichiers à exclure
        }),
        svgr(),
      ],
    },
    outDir: "build",
    sourcemap: true,
    assetsDir: "assets",
  },
});
