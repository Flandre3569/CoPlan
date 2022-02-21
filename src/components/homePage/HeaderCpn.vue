<script lang="ts" setup>
import HeaderSearch from "./HeaderSearch.vue";
</script>

<template>
  <div class="header flex justify-between items-center h-20">
    <div class="logo flex justify-around space-x-5 items-center mt-5">
      <h1 class="logo-text text-4xl font-semibold">CoPlan</h1>
      <div class="navBar pl-20">
        <ul class="nav flex items-center justify-evenly space-x-6 text-lg">
          <li><router-link to="">RECORD</router-link></li>
          <li><router-link to="">CONSUME</router-link></li>
          <li><router-link to="">TIMETABLE</router-link></li>
          <li><router-link to="">GOAL</router-link></li>
        </ul>
      </div>
    </div>

    <div class="search flex space-x-5 items-center justify-around">
      <HeaderSearch></HeaderSearch>
      <div class="flex items-center justify-center">
        <router-link
          to="/login"
          class="login text-2xl px-5 rounded-xl py-1 font-semibold hover:text-blue-800"
          >Sign in</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@btnColor: #8bd3dd;
@fontColor: #001858;
@fontFamily: proxima-nova, sans-serif;

.logo-text {
  font-weight: 700;
  background-image: -webkit-linear-gradient(top, #0f0e17, #f3d2c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login {
  font-family: @fontFamily;
  color: @fontColor;
}

.nav li:hover {
  display: inline-block;
  border-bottom: solid 2px #ff6e6c;
}

.header {
  font-family: @fontFamily;
}
</style>
