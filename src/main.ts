import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, Notify } from "quasar";
import "quasar/src/css/index.sass";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Quasar, {
    plugins: {
      Notify,
    },
  })
  .mount("#app");
