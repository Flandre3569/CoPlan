import { createRouter, createWebHistory } from "vue-router";
import { localCache } from "@/utils/Cache";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/homePage",
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: "/homePage",
          name: "homePage",
          component: () => import("@/views/main/HomePage.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/record",
      name: "record",
      component: () => import("@/views/main/RecordPage.vue"),
    },
    {
      path: "/consume",
      name: "consume",
      component: () => import("@/views/main/ConsumePage.vue"),
    },
    {
      path: "/goal",
      name: "goal",
      component: () => import("@/views/main/GoalPage.vue"),
    },
    {
      path: "/timetable",
      name: "timetable",
      component: () => import("@/views/main/TimetablePage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/main/ProfilePage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/LoginPage.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const token = localCache.getCache("token");
  if (to.path !== "/login" && !token && to.path !== "/homePage") {
    return "login";
  }
});

export default router;
