<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  message: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    defult: "",
  },
});
</script>

<template>
  <div>
    <a-card class="card" hoverable style="width: 240px">
      <template #cover>
        <slot></slot>
      </template>
      <a-card-meta :title="title">
        <template #description>{{ message }}</template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style scoped>
.card {
  border: solid 1px;
  border-radius: 5%;
  height: 200px;
  background: rgba(0, 0, 0, 0);
}
</style>
