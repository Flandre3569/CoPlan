import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import type { IUser } from "./types";
import { localCache } from "@/utils/Cache";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    id: "",
    token: "",
  }),
  getters: {},
  actions: {
    async loginAction(payload: IUser) {
      const loginInfo = await axios.post("api/user/login", {
        username: payload.username,
        password: payload.password,
      });
      const result = loginInfo.data;

      localCache.setCache("token", result.token);
      localCache.setCache("user_id", result.id);

      this.$state.id = result.id;
      this.$state.token = result.token;
      if (result.token) {
        router.push("/homePage");
      }
    },
    signOutAction() {
      this.$state.id = "";
      this.$state.token = "";
    },
    async signUpAction(payload: IUser) {
      const registerInfo = await axios.post("api/user/register", {
        username: payload.username,
        password: payload.password,
      });
      console.log(registerInfo);
    },
  },
});
