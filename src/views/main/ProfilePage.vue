<script setup lang="ts">
import { ref } from "vue";
import { useProfile } from "@/stores/profile";
import { onMounted } from "vue";
import { localCache } from "@/utils/Cache";
const profileStore = useProfile();
onMounted(() => {
  profileStore.queryProfile();
});

const imgSrc = ref(
  "http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/38O1Z%5DE5G4%7D_%60EO9KPK8%5B7T.bmp"
);

const data = profileStore.$state;
const name = localCache.getCache("user_name");
</script>

<template>
  <div class="profile-page relative">
    <div class="profile-card bg-white absolute flex animate__animated animate__zoomIn">
      <div class="avatar w-2/5 px-10 pt-10">
        <img :src="imgSrc" alt="" class="avatar-img" />
      </div>
      <div>
        <button class="title mt-10 rounded-md p-2">hello</button><br />
        <span class="title-name">i am {{ name }}</span>
        <div class="mt-10">
          <ul v-for="(value, key) in data" :key="key">
            <li class="flex justify-start space-x-5">
              <h2>{{ key }}</h2>
              <span>{{ value }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="h-14 w-full bg-gray-600 bottom-0 fixed flex justify-center items-center space-x-10"
      >
        <img
          src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d81519e9b6fd1303b7a93_facebook-letter-logo.svg"
          width="20"
          class="image"
        />
        <img
          src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d81513d9b846e05705c38_twitter-logo.svg"
          width="22"
          class="image-2"
        />
      </div>
    </div>

    <div class="bg-top h-1/4"></div>

    <button class="download border rounded-md border-gray-600 px-6 py-4">DOWNLOAD RESUME</button>

    <div class="bg-buttom absolute h-1/4 bottom-0 text-center w-full">
      <h1 class="footer_title">My Technology Stack</h1>
      <div class="footer_container w-2/3 h-3/4 bg-gray-600">
        <div class="tech_first"></div>
        <div class="tech_second"></div>
        <div class="tech_third"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
  Verdana, sans-serif;

@bg-img: url("http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/small121606lRg6G1626581766.jpg");
.profile-page {
  height: 70vw;
}
.bg-top {
  background: @bg-img;
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

.title {
  font-size: large;
  border: burlywood solid 1px;
}
.title-name {
  font-size: xxx-large;
  font-family: @font-family;
}

.download {
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  top: 30%;
  left: 50%;
  opacity: 0.7;
  transform: translate(-50%, -100%);
  font-family: @font-family;
}

.footer_title {
  font-size: 2rem;
  font-family: @font-family;
}
.footer_container {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
