<template>
  <article class="apps" v-if="!isMobile">
    <section v-for="(app, index) in windowsStore.windows" :key="index" @click="toggle(app)">
      <img :src="app.icon" :alt="app.name">
      <p>{{ app.name }}</p>
    </section>
  </article>

  <article class="apps" v-else>
    <section v-for="(app, index) in windowsStore.windows" :key="index">
      <router-link :to="app.route">
        <img :src="app.icon" :alt="app.name"/>
        <p>{{ app.name }}</p>
      </router-link>
    </section>
  </article>
</template>

<script setup>
import {useWindowsStore} from "@/stores/windowsStore.js";
import {ref, onMounted, onBeforeUnmount, watch} from "vue";
import {useRouter} from "vue-router";

const windowsStore = useWindowsStore();
const router = useRouter();

const isMobile = ref(window.innerWidth <= 700);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 700;
};

watch(isMobile, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    if (newVal) {
      windowsStore.windows.forEach((window) => {
        window.isHidden = true;
      });
    } else {
      router.push("/");
    }
  }
});

onMounted(() => {
  window.addEventListener("resize", handleResize);

  if (isMobile.value) {
    windowsStore.windows.forEach((window) => {
      window.isHidden = true;
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const toggle = (app) => {
  app.isHidden = !app.isHidden;
  if (app.name === "Recycle Bin"){
    windowsStore.step = 0;
  }
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