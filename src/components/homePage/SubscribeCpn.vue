<script setup lang="ts">
import InputCpnVue from "@/components/modules/InputCpn.vue";
import { reactive } from "vue";
import axios from "axios";
const subscribe = reactive({
  email: "",
});
console.log(subscribe);

const subscribeAction = async (email: string) => {
  const result = await axios.post("api/subscribe", {
    email: email,
  });
  console.log(result);
};
</script>

<template>
  <div class="subscribe">
    <div class="title text-center mt-32 font-semibold">
      <span>Subscribe to My Newsletter</span>
    </div>
    <InputCpnVue
      :email="subscribe.email"
      @subscribe="subscribeAction(subscribe.email)"
    ></InputCpnVue>
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5rem;
}
</style>
