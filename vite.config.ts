import * as path from 'path';
import { defineConfig } from 'vite';
import ts from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';
import svgr from 'vite-plugin-svgr'

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
        }),
        eslint({
          include: ['src/**/*.ts', 'src/**/*.tsx'], // Les fichiers à linter
          exclude: ['node_modules/**', 'build/**'] // Les fichiers à exclure
        }),
        svgr({
          exportAsDefault: true
        })
      ]
    },
    outDir: 'build',
    sourcemap: true,
    assetsDir: 'assets'
  }
});
