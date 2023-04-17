import * as path from 'path';
import { defineConfig } from 'vite';
import ts from 'rollup-plugin-typescript2';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.tsx'),
      name: 'popoyoko-ui-vite',
      formats: ['es', 'cjs'],
      fileName: (format) => `popoyoko-ui-vite.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      plugins: [
        ts({
          tsconfig: path.resolve(__dirname, 'tsconfig.json')
        })
      ]
    },
    outDir: 'build',
    sourcemap: true,
    assetsDir: 'assets'
  }
});
