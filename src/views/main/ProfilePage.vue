<script setup lang="ts">
import { ref } from "vue";
const imgSrc = ref(
  "http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/38O1Z%5DE5G4%7D_%60EO9KPK8%5B7T.bmp"
);
</script>

<template>
  <div class="profile-page relative">
    <div class="profile-card bg-white absolute flex">
      <div class="avatar w-2/5 px-10 pt-10">
        <img :src="imgSrc" alt="" class="avatar-img" />
      </div>
      <div></div>
    </div>
    <div class="bg-top h-1/4"></div>

    <div class="bg-buttom"></div>
  </div>
</template>

<style scoped lang="less">
.profile-page {
  height: 90vw;
}
.bg-top {
  background: url("http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/small121606lRg6G1626581766.jpg");
  background-size: cover;
  background-position: center center;
}
.profile-card {
  z-index: 10;
  height: 25vw;
  width: 50vw;
  top: 10%;
  left: 50%;
  transform: translateX(-25vw);
  box-shadow: 0px 0px 8px 3px #6a7693;
}

.avatar-img {
  margin: 0 auto;
  height: 80%;
}
</style>
