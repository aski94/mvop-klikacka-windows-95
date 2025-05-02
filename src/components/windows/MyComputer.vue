<template>
  <section class="window-content">
    <button @click="increment">
      <span>Earn</span>
      <img src="/images/windows-95.svg" alt="Earn logo">
    </button>
    <p>{{ "+" + counterStore.perClick }}</p>
    <p>{{ "+" + counterStore.perSecond + "/s" }}</p>
    <p v-if="counterStore.reinstallMultiplier !== 1">{{"*" + counterStore.reinstallMultiplier}}</p>
    <section class="earn">
      <p>{{ counterStore.count }}</p>
      <img src="/images/windows-95.svg" alt="Earn logo">
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

@media (max-width: 700px) {
  .window-content {
    flex-direction: column;
    row-gap: 2em;
    justify-content: flex-start;
  }

  .earn {
    order: -1;
  }

  button{
    order: -2;
  }
}
</style>