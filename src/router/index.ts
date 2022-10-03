import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

export default router;
