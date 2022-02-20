<script setup lang="ts"></script>

<template>
  <div class="login">
    <div class="login-box w-3/5 h-3/5 border-2 rounded-lg flex justify-between">
      <div class="login-display border-2 w-full"></div>
      <div class="login-form border-2 w-full"></div>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to right top, #b8b203, #7ec450, #37ce8e, #00d2c5, #12d1eb);
}

.login-box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.display-img {
  margin: 0 auto;
}
</style>
