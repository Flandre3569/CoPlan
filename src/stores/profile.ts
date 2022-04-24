import { defineStore } from "pinia";
import axios from "axios";
import { localCache } from "@/utils/Cache";

// 拦截token
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
    name: "",
    university: "",
    address: "",
    email: "",
    update_id: "",
    introduction: "",
  }),
  getters: {},
  actions: {
    async queryProfile() {
      const userId = localCache.getCache("user_id");
      const profileInfo = await axios.post("api/user/queryProfile", {
        id: userId,
      });

      const { id, name, user_id, university, address, avatar, email, updateAt, introduction } =
        profileInfo.data[0];
      const update_id = new Date(updateAt).toString();

      localCache.setCache("user_name", name);

      // 多值赋值
      this.$patch({
        name,
        university,
        email,
        address,
        update_id,
        introduction,
      });
    },
  },
});
