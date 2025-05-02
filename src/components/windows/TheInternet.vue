<template>
  <section class="window-content">
    <section v-for="(upgrade, index) in upgradesStore.upgrades" :key="index" class="upgrade">
      <section class="description">
        <p>{{ upgrade.title }}</p>
        <img :src="upgrade.icon" :alt="upgrade.title">
      </section>
      <section class="buy">
        <section class="price">
          <p>{{ upgrade.price }}</p>
          <img src="@/assets/images/windows-95.svg" alt="Earn logo">
        </section>
        <button @click="buy(upgrade)">
          <span>Buy</span>
        </button>
      </section>

    </section>
  </section>

</template>

<script setup>
import {useUpgradesStore} from "@/stores/upgradesStore.js";
import {useCounterStore} from "@/stores/counterStore.js";

const upgradesStore = useUpgradesStore();
const counterStore = useCounterStore();

const buy = (upgrade) => {
  upgradesStore.upgrade(upgrade);
}
</script>

<style scoped lang="scss">
.window-content {
  flex-direction: column;
  row-gap: 0.5em;
}

.upgrade {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  column-gap: 1em;
}

.description {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;

  img {
    width: 2.6em;
    height: 2.6em;
  }
}

.buy {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2em;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }
}

.price {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;
}


p {
  font-size: 1.3em;
}

@media (max-width: 700px) {
  .buy{
    column-gap: 1.5em;
  }


  .description {
    p:nth-child(1){
      display: none;
    }
  }
}
</style>