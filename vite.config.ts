import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";//SWC (Speedy WebAssembly Compiler)
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // ajoutez le plugin copy et configurez-le pour copier le fichier package.json
    copy({
      targets: [{ src: "package.json", dest: "dist" }],
      hook: "writeBundle" // exécutez la copie après la génération des fichiers
    })
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    //vider le répertoire de sortie avant de générer
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/components/",
      output: {
        // nom des fichiers générés pour les points d'entrée
        entryFileNames: "[name].js",
        // nom des fichiers générés pour les "chunks"
        chunkFileNames: "[name].js",
        //nom des fichiers générés pour les fichiers statiques 
        assetFileNames: "[name].[ext]",
      }
    },
  },
});
