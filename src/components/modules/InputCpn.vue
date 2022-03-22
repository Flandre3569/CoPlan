<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const subscribe = ref<string>("");

const subscribeAction = async (subscribe: string) => {
  const result = await axios.post("api/subscribe", {
    email: subscribe,
  });
  console.log(result);
};
</script>

<template>
  <div class="input-cpn flex justify-center items-center">
    <div class="sub-input flex justify-center items-center w-1/2 rounded-lg space-x-5 mt-5">
      <a-input
        type="text"
        placeholder="Your email"
        class="subscribe h-14"
        v-model:value="subscribe"
      >
        <template #prefix>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </template>
      </a-input>
      <button class="sub-btn px-4 py-3 font-semibold" @click="subscribeAction(subscribe)">
        Subscribe*
      </button>
    </div>
  </div>
  <div class="discribe flex justify-center items-center mt-5">
    <span>*stay tuned for the latest updates and news.</span>
  </div>
</template>

<style scoped lang="less">
@fontColor: #6366f1;
.input-cpn {
  width: 100%;
}
.sub-btn {
  font-size: x-large;
  color: @fontColor;
  border-radius: 10px;
  background: #f3d2c1;
  box-shadow: 21px 21px 42px #ddbfb0, -21px -21px 42px #ffe5d2;
}
.sub-btn:hover {
  border-radius: 10px;
  background: #f3d2c1;
  box-shadow: 21px 21px 42px #eecebd, -21px -21px 42px #f8d6c5;
}
.sub-btn {
  transition: all 0.5s ease-out;
}
.subscribe {
  border-radius: 10px;
}
</style>
