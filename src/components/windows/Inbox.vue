<template>
  <section class="window-content" ref="logs">
    <ul>
      <li v-for="(log, index) in upgradesStore.logs" :key="index">
        {{ log }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import {useUpgradesStore} from "@/stores/upgradesStore.js";
import { useScroll } from '@vueuse/core';

const upgradesStore = useUpgradesStore();
const logs = ref(null);
const { y } = useScroll(logs);

'<! – Zdroj: https://vueuse.org/core/useScroll/#usescroll – ->'
watch(
    () => upgradesStore.logs.length,
    async () => {
      await nextTick();
      if (logs.value) {
        y.value = logs.value.scrollHeight;
      }
    }
);
</script>

<style scoped lang="scss">
.window-content {
  justify-content: flex-start;
  align-items: flex-start;
  height: 195px;
  margin-top: 0.25em;
  padding: 0.25em;
  overflow-y: auto;
  background-color: white !important;

  .title-bar{
    column-gap: 10rem;
  }
}


li{
  padding: 0.25em 0;
}
</style>