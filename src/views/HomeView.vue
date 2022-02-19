<script setup lang="ts">
import HeaderCpn from "@/components/HeaderCpn.vue";
</script>

<template>
  <div class="home">
    <header class="header w-4/5">
      <HeaderCpn></HeaderCpn>
    </header>
    <div class="container w-4/5">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="w-full h-40 bg-gray-500 mt-20"></div>
    </footer>
  </div>
</template>

<style scoped>
.header,
.container {
  margin: 0 auto;
}
</style>
