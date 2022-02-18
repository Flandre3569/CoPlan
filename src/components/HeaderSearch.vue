<script lang="ts" setup></script>
<template>
  <div class="search">
    <input
      type="text"
      class="rounded bg-gray-900 border border-gray-600 placeholder-gray-400 w-72 px-3 py-1"
      id="search"
      placeholder="Search or jump to..."
    />
    <div class="absolute top-0 right-0 flex items-center h-full">
      <div class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">/</div>
    </div>
  </div>
</template>
<style scoped>
#search:focus {
  width: 500px;
  transition: all 0.3s ease-out;
}
#search {
  transition: all 0.3s ease-out;
}
</style>
