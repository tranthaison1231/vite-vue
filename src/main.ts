import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './routers';

createApp(App)
  .use(router)
  .use(Quasar, {
    plugins: {},
  })
  .mount('#app');
