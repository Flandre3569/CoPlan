import { defineStore } from "pinia";
import type { IAuth } from "./types";
import axios from "axios";
import { localCache } from "@/utils/Cache";

// 待修改
axios.interceptors.request.use((config) => {
  const token = localCache.getCache("token");
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const useProfile = defineStore({
  id: "profile",
  state: () => ({
    id: "",
    user_id: "",
    avatar: "",
    email: "",
    updateAt: "",
  }),
  getters: {},
  actions: {
    async queryProfile() {
      const user_id = localCache.getCache("user_id");
      const profileInfo = await axios.post("api/user/queryProfile", {
        id: user_id,
      });
      console.log(profileInfo);

      const result = profileInfo.data;
    },
  },
});
