<script setup lang="ts">
const config = useRuntimeConfig().public;
</script>

<template>
  <div class="iframe-container">
    <iframe :src="`${config.baseUrl || ''}/reference/dist/index.html`" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<style scoped>
.iframe-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
