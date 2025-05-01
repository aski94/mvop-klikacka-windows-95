<template>
  <article class="window centered">
    <section class="title-bar">
      <section>
        <img :src="route.meta.icon" :alt="route.meta.title"/>
        <p>{{ route.meta.title }}</p>
      </section>
      <button @click="closeWindow"><span>X</span></button>
    </section>

    <router-view/>

  </article>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();

const closeWindow = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.window {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: fixed;
  background-color: rgb(195, 195, 195);
  border-width: 3px;
  border-style: solid;
  border-color: white rgb(44, 44, 44) rgb(44, 44, 44) white;
  padding: 0.25rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;


  section:first-child {
    padding: 0.125rem 0.25rem;
    background-color: rgb(0, 0, 172);
    box-sizing: border-box;
    p {
      color: white;
      font-weight: bold;
    }
  }
}

.hidden {
  display: none;
}

.centered {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 4rem;
  width: 100%;
  min-height: 35px;
  white-space: nowrap;

  section {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  img {
    height: 1.6rem;
    width: 1.6rem;
  }

  span {
    font-weight: 900;
  }
}

:deep(.window-content) {
  display: flex;
  width: 100%;
  background-color: rgb(195, 195, 195);
  box-sizing: border-box;
  padding-top: 0.25rem;

  button {
    span {
      font-size: 1.5rem;
    }
  }
}
</style>
