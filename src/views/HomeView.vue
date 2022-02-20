<script setup lang="ts">
import HeaderCpn from "@/components/HeaderCpn.vue";
import FooterCpnVue from "@/components/FooterCpn.vue";
</script>

<template>
  <div class="home">
    <header class="header sticky">
      <HeaderCpn class="w-4/5"></HeaderCpn>
    </header>
    <div class="contain">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <FooterCpnVue></FooterCpnVue>
    </footer>
  </div>
</template>

<style scoped>
.header {
  margin: 0 auto;
}

.footer {
  margin-top: 10%;
}

.header {
  top: 0;
  z-index: 10;
  background-color: #fef6e4;
}
</style>
