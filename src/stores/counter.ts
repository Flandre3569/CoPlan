import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    id: "",
    token: "",
  }),
  getters: {},
  actions: {},
});
