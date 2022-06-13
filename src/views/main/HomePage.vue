<script setup lang="ts">
import HomeShowVue from "@/components/homePage/HomeShow.vue";
import ShowInfoVue from "@/components/homePage/ShowInfo.vue";
import ShowToolsVue from "@/components/homePage/ShowTools.vue";
import SubscribeCpnVue from "@/components/homePage/SubscribeCpn.vue";
</script>

<template>
  <div class="home-page">
    <a-row class="home-show w-4/5">
      <a-col :span="12" class="flex items-center h-full mt-20 animate__animated animate__fadeInLeft"
        ><div class="disc flex justify-center items-center px-10 flex-wrap w-11/12">
          <h1 class="discTitle text-5xl">This is a system which can develop ourselves.</h1>
          <p class="discContent mt-10">
            Don't manage your time well? Don't know where the money goes? You can record your life,
            set goals, plan your time, and track your spending through system.
          </p>
        </div></a-col
      >
      <a-col :span="12">
        <HomeShowVue
          class="homeShow animate__animated animate__zoomIn w-full h-full py-10"
        ></HomeShowVue>
      </a-col>
    </a-row>
    <ShowInfoVue class="show-info w-4/5 animate__animated animate__zoomIn"></ShowInfoVue>
    <ShowToolsVue class="show-tools mt-60"></ShowToolsVue>
    <SubscribeCpnVue></SubscribeCpnVue>
  </div>
</template>

<style scoped lang="less">
@fontFamily: proxima-nova, sans-serif;
@discColor: #001858;
// .content {
//   height: 400px;
// }
.home-page,
.home-show,
.show-info {
  margin: 0 auto;
}

.home-show,
.show-info {
  margin-top: 5rem;
}

.discTitle {
  font-size: 50px;
  font-weight: 700;
  color: @discColor;
}
.discContent {
  font-size: 1.3rem;
  font-weight: 400;
}

.discTitle,
.discContent {
  font-family: @fontFamily;
  line-height: 1.15;
  color: rgb(23, 44, 102);
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.show-tools {
  width: 100% !important;
}
</style>
