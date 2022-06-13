<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { UnwrapRef } from "vue";
import { useUserStore } from "@/stores/user";

const SignIn = "Go Sign In";
const SignUp = "Go Sign Up";
const displayRight = "50%";
const displayLeft = "0";

interface IFormData {
  username: string;
  password: string;
}
const tipInfo = ref(SignUp);
const displayPosition = ref(displayLeft);
const isActiveLeft = ref(false);
const isActiveRight = ref(true);

// pinia取值
const userStore = useUserStore();

// 登录
const loginData: UnwrapRef<IFormData> = reactive({
  username: "",
  password: "",
});
// 注册
const registerData: UnwrapRef<IFormData> = reactive({
  username: "",
  password: "",
});

const toggleBtn = () => {
  displayPosition.value === displayLeft
    ? (displayPosition.value = displayRight)
    : (displayPosition.value = displayLeft);
  tipInfo.value === SignIn ? (tipInfo.value = SignUp) : (tipInfo.value = SignIn);
  isActiveLeft.value = !isActiveLeft.value;
  isActiveRight.value = !isActiveRight.value;
};
</script>

<template>
  <div class="login animate__animated animate__fadeIn">
    <div class="wrapper flex justify-center mt-20 mb-10">
      <div class="typing-demo">Please enter your username and password.</div>
    </div>
    <div class="login-box w-3/5 h-3/5 flex justify-between relative">
      <div
        class="login-display w-1/2 h-full rounded-xl bg-white z-10 absolute"
        :style="{ left: displayPosition }"
      >
        <img src="@/assets/images/blogging.png" alt="" />
        <a-button danger class="toggleBtn w-4/5 mt-10 ml-10" @click="toggleBtn">{{
          tipInfo
        }}</a-button>
      </div>
      <div class="login-form w-full relative">
        <a-form
          layout="vertical"
          :model="registerData"
          class="form-data animate__animated animate__fadeIn"
          v-show="isActiveLeft"
        >
          <a-form-item label="Username">
            <a-input
              class="h-12"
              v-model:value="registerData.username"
              placeholder="plz enter usr"
            />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password
              class="h-12"
              v-model:value="registerData.password"
              placeholder="plz enter pwd"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" danger @click="userStore.signUpAction(registerData)"
              >Sgin up</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <div class="login-form w-full relative">
        <a-form
          layout="vertical"
          :model="loginData"
          class="form-data animate__animated animate__fadeIn"
          v-show="isActiveRight"
        >
          <a-form-item label="Username">
            <a-input class="h-12" v-model:value="loginData.username" placeholder="plz enter usr" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password
              class="h-12"
              v-model:value="loginData.password"
              placeholder="plz enter pwd"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" danger @click="userStore.loginAction(loginData)"
              >Sgin in</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to right top, #fef6e4, #fbedda, #f8e4d1, #f6dbc8, #f3d2c1);
}

.login-box {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.typing-demo {
  width: 40ch;
  animation: typing 2s steps(20), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.form-data {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}

.login-display {
  transition: all 0.5s ease-out;
}

.isAchtive {
  display: none;
}
</style>
