<script lang="ts" setup>
import HeaderSearch from "./HeaderSearch.vue";
import { localCache } from "@/utils/Cache";
import { AntDesignOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const visible = ref(false);
const showToggle = ref(false);
const userStore = useUserStore();
const token = localCache.getCache("token");

// 头像和登录的切换
if (token) {
  showToggle.value = true;
}
// 退出登录
// 这里的这个类型不知道为什么没有onClick，所以暂时用any
const handleMenuClick = (e: any) => {
  if (e.key === "3") {
    localCache.deleteCache("id");
    localCache.deleteCache("token");
    userStore.signOutAction();
  }
  showToggle.value = !showToggle.value;
};
</script>

<template>
  <div class="header flex justify-between items-center h-20">
    <div class="logo flex justify-around space-x-5 items-center mt-5">
      <h1 class="logo-text text-4xl font-semibold">CoPlan</h1>
      <div class="navBar pl-20">
        <ul class="nav flex items-center justify-evenly space-x-6 text-lg">
          <li><router-link to="/record">RECORD</router-link></li>
          <li><router-link to="/consume">CONSUME</router-link></li>
          <li><router-link to="/timetable">TIMETABLE</router-link></li>
          <li><router-link to="/goal">GOAL</router-link></li>
        </ul>
      </div>
    </div>

    <div class="search flex space-x-5 items-center justify-around">
      <HeaderSearch></HeaderSearch>
      <div class="flex items-center justify-center">
        <router-link
          to="/login"
          v-show="!showToggle"
          class="login text-2xl px-5 rounded-xl py-1 font-semibold hover:text-blue-800"
          >Sign in</router-link
        >
      </div>
      <a-dropdown v-model:visible="visible">
        <a-avatar v-show="showToggle" :size="{ xs: 12, sm: 16, md: 20, lg: 32, xl: 40, xxl: 50 }">
          <template #icon>
            <AntDesignOutlined />
          </template>
        </a-avatar>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">your profile</a-menu-item>
            <a-menu-item key="2">setting</a-menu-item>
            <a-menu-item key="3">sign out</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
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
