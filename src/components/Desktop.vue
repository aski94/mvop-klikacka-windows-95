<template>
  <main>
    <Apps></Apps>
    <Windows></Windows>
  </main>
</template>

<script setup>
import Apps from "@/components/Apps.vue";
import Windows from "@/components/Windows.vue";
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

@media (max-width: 700px) {
  .apps{
    display: none;
  }
}
</style>