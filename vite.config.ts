import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { defineConfig } from "vite";
import pages from "vite-plugin-pages";
import layouts from "vite-plugin-vue-layouts";

import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "#": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueJsx(),
    pages({
      routeStyle: "nuxt",
      dirs: "src/pages",
      importMode: "async",
    }),
    layouts({
      layoutsDirs: "./src/layouts",
      defaultLayout: "default",
    }),
    quasar({
      sassVariables: "src/configs/theme/variables.sass",
    }),
  ],
});
