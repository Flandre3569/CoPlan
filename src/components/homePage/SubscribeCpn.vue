<script setup lang="ts">
import { ref } from "vue";
import InputCpnVue from "@/components/modules/InputCpn.vue";
const email = ref("");
</script>

<template>
  <div class="subscribe">
    <div class="title text-center mt-32 font-semibold">
      <span>Subscribe to My Newsletter</span>
    </div>
    <InputCpnVue :email="email"></InputCpnVue>
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5rem;
}
</style>
