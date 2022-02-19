<script setup lang="ts">
import CardCpnVue from "./modules/CardCpn.vue";
import { reactive } from "vue";
const props = reactive({
  vueInfo: {
    title: "Vuejs-core",
    message: "系统采用最新的vue3作为实现框架",
  },
  viteInfo: {
    title: "vite",
    message: "系统采用热度最高的vite作为打包工具",
  },
  tailwindInfo: {
    title: "tailwindcss",
    message: "采用最流行的css框架tailwind实现页面渲染",
  },
  ts: {
    title: "typeScript",
    message: "采用生态逐渐扩大的typescript作为系统实现语言",
  },
});
</script>

<template>
  <div class="showInfo px-0 mt-28">
    <a-row class="flex">
      <a-col :span="6"
        ><CardCpnVue :message="props.vueInfo.message" :title="props.vueInfo.title">
          <svg
            class="info vue-info fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Vue.js</title>
            <path
              d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
            /></svg></CardCpnVue
      ></a-col>
      <a-col :span="6"
        ><CardCpnVue :title="props.viteInfo.title" :message="props.viteInfo.message">
          <svg
            class="info vite-info fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Vite</title>
            <path
              d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"
            /></svg></CardCpnVue
      ></a-col>
      <a-col :span="6"
        ><CardCpnVue :title="props.tailwindInfo.title" :message="props.tailwindInfo.message">
          <svg
            class="info tailwind-info fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path
              d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
            /></svg></CardCpnVue
      ></a-col>
      <a-col :span="6"
        ><CardCpnVue :title="props.ts.title" :message="props.ts.message">
          <svg
            class="info ts-info fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>ts-node</title>
            <path
              d="M11.999 0c-.196 0-.392.05-.568.153L2.026 5.58a1.135 1.135 0 00-.568.983V17.43c0 .406.216.781.568.984l5.787 3.344v-7.344H4.748v-1.943h8.342v1.943h-3.065v8.622l1.406.812c.351.203.784.203 1.136 0l2.317-1.338a3.958 3.958 0 01-1.195-1.413l1.801-1.042c.361.59.806 1.06 1.48 1.25l2.174-1.256c-.127-.568-.698-.823-1.584-1.21l-.553-.238c-1.596-.68-2.655-1.532-2.655-3.334 0-1.658 1.265-2.922 3.24-2.922 1.406 0 2.417.49 3.144 1.77l-1.723 1.105c-.379-.68-.79-.948-1.421-.948-.648 0-1.06.41-1.06.948 0 .663.412.932 1.36 1.343l.553.237c1.336.573 2.255 1.155 2.676 2.107l.853-.493c.352-.203.568-.578.568-.984V6.565c0-.406-.216-.782-.568-.984L12.567.153A1.134 1.134 0 0011.999 0z"
            /></svg></CardCpnVue
      ></a-col>
    </a-row>
  </div>
</template>

<style scoped>
.info {
  margin: 0 auto;
  margin-top: 10px;
  width: 75%;
  height: auto;
}
.vue-info {
  color: #4fc08d;
}

.vite-info {
  color: #646cff;
}

.tailwind-info {
  color: #06b6d4;
}

.ts-info {
  color: #3178c6;
}
</style>
