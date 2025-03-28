<template>
  <article class="apps">
    <section v-for="(app, index) in windowsStore.windows" :key="index" @click="open(app)">
      <img :src="app.icon" :alt="app.name">
      <p>{{ app.name }}</p>
    </section>
  </article>
</template>

<script setup>
import {useWindowsStore} from "@/stores/windowsStore.js";

const windowsStore = useWindowsStore();

const open = (app) => {
  app.isHidden = false;
}

</script>

<style scoped lang="scss">
.apps {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 100px;
  padding: 0.4rem;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 0.5rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
    }

    p {
      text-align: center;
      color: white;
    }
  }

  section:hover {
    cursor: pointer;
  }
}
</style>