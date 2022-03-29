import { defineStore } from "pinia";
import type { IAuth } from "./types";
import axios from "axios";
import { localCache } from "@/utils/Cache";

// 待修改
// axios.interceptors.request.use((config) => {
//   const token = localCache.getCache("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

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
    async queryProfile(profile: IAuth) {
      const profileInfo = await axios.post("api/user/queryProfile", {
        profile: profile,
      });
      console.log(profileInfo);

      const result = profileInfo.data;
    },
  },
});
