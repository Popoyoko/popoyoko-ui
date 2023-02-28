import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
  input: "src/components/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: true,
      modules: true,
    }),
    copy({
      targets: [
        { src: "src/components/**/*", dest: "dist/components" },
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
