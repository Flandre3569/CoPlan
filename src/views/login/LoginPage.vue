<script lang="ts">
import { defineComponent, reactive } from "vue";
import type { UnwrapRef } from "vue";

interface FormState {
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: "horizontal",
      fieldA: "",
      fieldB: "",
    });
    return {
      formState,
    };
  },
});
</script>

<template>
  <div class="login animate__animated animate__slideInDown">
    <div class="wrapper flex justify-center mt-20 mb-10">
      <div class="typing-demo">Please input your username and password.</div>
    </div>
    <div class="login-box w-3/5 h-3/5 flex justify-between space-x-3">
      <div class="login-display border-2 w-full border-black rounded-xl">
        <img src="@/assets/images/blogging.png" alt="" />
      </div>
      <div class="login-form border-2 w-full border-black rounded-xl relative">
        <a-form layout="vertical" :model="formState" class="form-data mx-3">
          <a-form-item label="Username">
            <a-input v-model:value="formState.fieldA" placeholder="plz input usr" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input v-model:value="formState.fieldB" placeholder="plz input pwd" />
          </a-form-item>
          <a-form-item>
            <a-button type="danger">Submit</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
