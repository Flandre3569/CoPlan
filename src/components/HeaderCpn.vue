<script lang="ts" setup>
import HeaderSearch from "./HeaderSearch.vue";
</script>

<template>
  <div class="header flex justify-between items-center h-20 mt-5">
    <div class="logo">
      <h1 class="text-5xl font-semibold">CoPlan</h1>
    </div>
    <div class="navBar pl-20">
      <ul class="flex items-center justify-evenly space-x-6">
        <li>ABOUT</li>
        <li>PROGRAM</li>
        <li>COURSES</li>
        <li>REVIEWS</li>
      </ul>
    </div>
    <div class="search">
      <HeaderSearch></HeaderSearch>
    </div>
    <div class="flex items-center justify-center">
      <span class="login text-2xl px-5">Sign in</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@btnColor: #ff6e6c;

.login {
  background-color: @btnColor;
}
</style>
