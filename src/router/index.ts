import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../shared/layouts/PrivateLayout.vue"),
    children: [{ path: "", component: () => import("../pages/HomePage.vue") }],
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
  {
    path: "/users",
    component: () => import("../pages/UsersPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/404Page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
