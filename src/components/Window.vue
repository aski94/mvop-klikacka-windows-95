<template>
  <article v-for="(window, index) in windowStore.windows" :key="index" class="window"
           :class="{ hidden: window.isHidden }">
    <section class="title-bar">
      <section>
        <img :src="window.icon" :alt="window.icon">
        <p>{{ window.name }}</p>
      </section>
      <button @click="close(window)">
        <span>X</span>
      </button>
    </section>
    <section class="window-content">
      <button @click="increment">
          <span>
            Earn
          </span>
        <img src="@/assets/images/windows-95.svg" alt="Earn logo">
      </button>
      <p>
        +0/s
      </p>
      <section class="earn">
        <p>
          {{ counterStore.count }}
        </p>
        <img src="@/assets/images/windows-95.svg" alt="Earn logo">
      </section>
    </section>
  </article>
</template>

<script setup>
import {useCounterStore} from "@/stores/counterStore.js";
import {useWindowStore} from "@/stores/windowStore.js";

const counterStore = useCounterStore();
const windowStore = useWindowStore();

const increment = () => {
  counterStore.increment();
  console.log("counterStore.increment", counterStore.count);
}

const close = (window) => {
  console.log("close");
  window.isHidden = true;
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.window {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(195, 195, 195);
  border-width: 3px;
  border-style: solid;
  border-color: white rgb(44, 44, 44) rgb(44, 44, 44) white;
  padding: 0.25rem;

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

.title-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40rem;
  height: 100%;
  white-space: nowrap;

  section {
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

.window-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(195, 195, 195);
  box-sizing: border-box;
  padding-top: 0.25rem;

  button {
    span {
      font-size: 1.5rem;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
  }
}

.earn {
  column-gap: 0.5rem;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }
}

@media (max-width: 1100px) {
  .title-bar {
    column-gap: 20rem;
  }
}

@media (max-width: 600px) {
  .title-bar {
    column-gap: 8rem;
  }
}
</style>