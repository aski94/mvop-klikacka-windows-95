<template>
  <main>
    <article class="desktop">
      <section v-for="(app, index) in windowStore.windows" :key="index" @click="open(app)">
        <img :src="app.icon" :alt="app.name">
        <p>{{ app.name }}</p>
      </section>
    </article>
    <Window></Window>
  </main>
</template>

<script setup>
import Window from './Window.vue';
import {useWindowStore} from "@/stores/windowStore.js";

const windowStore = useWindowStore();

const open = (app) => {
  app.isHidden = false;
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.desktop {
  row-gap: 2rem;
  max-width: 100px;
  padding: 0.4rem;

  section {
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