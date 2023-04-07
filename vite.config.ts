import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";//SWC (Speedy WebAssembly Compiler)
import copy from "rollup-plugin-copy";
import eslint from '@rollup/plugin-eslint';
import path from "path";


export default defineConfig({
  plugins: [react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'], // Les fichiers à linter
      exclude: ['node_modules/**', 'dist/**'] // Les fichiers à exclure
    }),
    // ajoutez le plugin copy et configurez-le pour copier le fichier package.json
    copy({
      targets: [{ src: "package.json", dest: "dist" },{ src: 'src/components/**/*', dest: 'dist/' }],
      flatten: false,
      // verbose: true, voir toit les fichier traités oar fast-glob dans la console
      hook: "writeBundle" // exécutez la copie après la génération des fichiers
    })
  ],
  
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.tsx'),
      name: 'popoyoko-ui-vite'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});