import { createPinia } from "pinia";
import { createApp, provide, h } from "vue";

import App from "./App.vue";
import router from "./router";

import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, Notify } from "quasar";
import "quasar/src/css/index.sass";
import { client } from "./graphql/client";
import { DefaultApolloClient } from "@vue/apollo-composable";

createApp({
  setup() {
    provide(DefaultApolloClient, client);
  },

  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .use(Quasar, {
    plugins: {
      Notify,
    },
  })
  .mount("#app");
