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

const userId = localCache.getCache("user_id");

export const useProfile = defineStore({
  id: "profile",
  state: () => ({
    name: "",
    university: "",
    address: "",
    email: "",
    update_time: "",
    introduction: "",
  }),
  getters: {},
  actions: {
    async queryProfile() {
      const profileInfo = await axios.post("api/user/queryProfile", {
        id: userId,
      });

      const {
        id,
        name,
        user_id,
        university,
        address,
        avatar,
        email,
        updateAt,
        introduction,
        background,
      } = profileInfo.data[0];
      const update_time = new Date(updateAt).toString().split(" GMT")[0];
      console.log(update_time);

      // 对需要保存的数据进行持久化处理

      localCache.setCache("user_name", name);
      localCache.setCache("avatar", avatar);
      localCache.setCache("bg_img", background);

      // 多值赋值
      this.$patch({
        name,
        university,
        email,
        address,
        update_time,
        introduction,
      });
    },
  },
});
