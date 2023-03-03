import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    production && terser(),
  ],
};
