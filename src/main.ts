import { createPinia } from "pinia";
import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "#/router/index";
import "#/router/permission";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, Notify } from "quasar";
import "quasar/src/css/index.sass";
import { client } from "./graphql/client";
import { DefaultApolloClient } from "@vue/apollo-composable";
import i18n from "./shared/i18n";

createApp({
  setup() {
    provide(DefaultApolloClient, client);
  },

  render: () => h(App),
})
  .use(router)
  .use(i18n)
  .use(createPinia())
  .use(Quasar, {
    plugins: {
      Notify,
    },
  })
  .mount("#app");
