import { defineConfig } from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
  plugins: [


    // Or With Vite Config
    ViteEjsPlugin((viteConfig) => {
      // viteConfig is the current viteResolved config.
      return {
        root: viteConfig,
        domain: "example.com",
        title: "My vue project!"
      }
    }),
  ],
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
  },
  root: "src",
});
