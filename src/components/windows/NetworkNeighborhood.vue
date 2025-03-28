<template>
  <section class="window-content">
    <section class="upgrade">
      <p class="left">Upgrade:</p>
      <p>Per click:</p>
      <p>Amount:</p>
    </section>
    <section v-for="(upgrade, index) in upgradesStore.upgrades" :key="index" class="upgrade">
      <section class="description">
        <p>{{ upgrade.title }}</p>
        <img :src="upgrade.icon" :alt="upgrade.name">
      </section>
      <p>{{ "+" + upgrade.perClick}}</p>
      <p class="">{{ upgrade.amount }}</p>
    </section>
  </section>
</template>

<script setup>
import {useUpgradesStore} from "@/stores/upgradesStore.js";

const upgradesStore = useUpgradesStore();

</script>

<style scoped lang="scss">
.window-content {
  flex-direction: column;
  row-gap: 0.5em;
}

.upgrade {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
}

.description {
  justify-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;

  img {
    width: 2.6em;
    height: 2.6em;
  }
}

.amount {
  justify-self: flex-end;
}

p {
  font-size: 1.3em;
}

.left{
  justify-self: flex-start;
}
</style>