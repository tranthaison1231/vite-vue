import { createRouter, createWebHistory } from "vue-router";
import HomePage from "#/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/login",
    component: () => import("../pages/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../pages/DashboardPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
