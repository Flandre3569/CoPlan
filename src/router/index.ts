import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { localCache } from "@/utils/Cache";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/homePage",
      component: HomeView,
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

const token = localCache.getCache("token");
router.beforeEach((to, from) => {
  if (to.name !== "login" && !token && to.name !== "homePage") {
    return "login";
  }
});

export default router;
