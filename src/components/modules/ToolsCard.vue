<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a-card style="width: 100%" class="card">
    <div class="title flex items-center space-x-5">
      <slot></slot>
      <h1 class="text-2xl font-semibold">{{ title }}</h1>
    </div>
    <p class="content mt-5">{{ content }}</p>
  </a-card>
</template>

<style scoped lang="less">
@cardColor: #fef6e4;
@discColor: #001858;
.card {
  background-color: @cardColor;
}

h1 {
  font-weight: 700;
  color: @discColor;
}

p {
  font-weight: 500;
  font-size: medium;
  opacity: 0.7;
  color: @discColor;
}
</style>
