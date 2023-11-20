import { defineConfig } from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
  plugins: [
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
    outDir: "./dist",
  },
  base: "./",
  //root: "src" //如果檔案太多，可將網站檔案包在src資料夾裡面
});
