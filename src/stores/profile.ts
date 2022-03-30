import { defineStore } from "pinia";
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
    update_id: "",
  }),
  getters: {},
  actions: {
    async queryProfile() {
      const userId = localCache.getCache("user_id");
      const profileInfo = await axios.post("api/user/queryProfile", {
        id: userId,
      });

      const { id, user_id, avatar, email, updateAt } = profileInfo.data[0];
      const update_id = new Date(updateAt).toString();

      // 多值赋值
      this.$patch({
        id,
        user_id,
        avatar,
        email,
        update_id,
      });
    },
  },
});
