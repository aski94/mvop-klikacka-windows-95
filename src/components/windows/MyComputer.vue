<template>
  <section class="window-content">
    <button @click="increment">
      <span>Earn</span>
      <img src="@/assets/images/windows-95.svg" alt="Earn logo">
    </button>
    <p>{{ "+" + counterStore.perClick }}</p>
    <p>+0/s</p>
    <section class="earn">
      <p>{{ counterStore.count }}</p>
      <img src="@/assets/images/windows-95.svg" alt="Earn logo">
    </section>
  </section>
</template>

<script setup>
import {useCounterStore} from "@/stores/counterStore.js";

const counterStore = useCounterStore();

const increment = () => {
  counterStore.increment();
}
</script>

<style scoped lang="scss">

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.window-content {
  justify-content: space-between;
  align-items: center;

  button {
       img {
      width: 2.5em;
      height: 2.5em;
    }
  }
}

.earn {
  width: 80px;
  justify-content: flex-end;
  column-gap: 0.5em;

  img {
    width: 2.8em;
    height: 2.8em;
  }


}

p {
  font-size: 1.3em;
}
</style>