import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '#': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueJsx(),
    quasar({
      sassVariables: 'src/configs/theme/variables.sass',
    }),
  ],
});
