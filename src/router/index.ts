import { createRouter, createWebHistory } from "vue-router";
import { localCache } from "@/utils/Cache";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/LoginPage.vue"),
    },
    {
      path: "/",
      name: "home",
      redirect: "/login",
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: "/overview",
          name: "overview",
          component: () => import("@/views/overview/overview.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  const token = localCache.getCache("token");
  if (to.path !== "/login" && !token && to.path !== "/homePage") {
    return "login";
  }
});

export default router;
