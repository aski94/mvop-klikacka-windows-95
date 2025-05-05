<template>
  <section class="window-content" v-if="windowsStore.step === 0">
    <img src="/images/reinstall.png" alt="reinstallation image"/>
    <section class="description">
      <p>
        Windows 95 Reinstallation Wizard
      </p>
      <p>
        Welcome to the Windows 95 Reinstallation Wizard. This process will restore your system to its original state.
      </p>
      <p>To proceed, the following conditions must be met:</p>
      <ul>
        <li>10,000,000 currency</li>
        <li>All upgrades must be purchased at least once</li>
      </ul>
      <p>Upon reinstallation, you will receive the following benefits:</p>
      <ul>
        <li>Faster progression in the next run</li>
        <li>Permanent reinstall multiplier x2</li>
      </ul>
      <p>
        Note: All progress will be permanently erased. Do you wish to continue?
      </p>

    </section>
    <section class="controls">
      <hr>
      <div class="buttons">
        <button @click="windowsStore.step++">Next ></button>
        <button @click="close">Cancel</button>
      </div>
    </section>
  </section>

  <section class="window-content" v-if="windowsStore.step === 1">
    <img src="/images/reinstall.png" alt="Reinstallation"/>
    <section class="description">
      <p>
        Are you absolutely sure?
      </p>
      <p>
        This action cannot be undone.
      </p>
      <p>
        Click “Finish” to reinstall your system.
      </p>
    </section>
    <section class="controls">
      <hr>
      <div class="buttons">
        <button @click="windowsStore.step--">< Back</button>
        <button @click="reinstall">Finish</button>
        <button @click="close">Cancel</button>
      </div>
    </section>
  </section>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useWindowsStore} from "@/stores/windowsStore.js";
import {useCounterStore} from "@/stores/counterStore.js";
import {useUpgradesStore} from "@/stores/upgradesStore.js";

const router = useRouter();
const windowsStore = useWindowsStore();
const counterStore = useCounterStore();
const upgradesStore = useUpgradesStore();

const close = () => {
  const recycleBin = windowsStore.windows.find(w => w.name === "Recycle Bin");
  recycleBin.isHidden = true;
  windowsStore.step = 0;
  router.push("/");
}

const reinstall = () => {
  if (
      counterStore.count >= 10000000 &&
      upgradesStore.upgrades.every((upgrade) => upgrade.amount >= 1)
  ) {
    counterStore.reinstallMultiplier *= 2;
    console.log(counterStore.reinstallMultiplier);
    windowsStore.resetWindows();
    counterStore.reset();
    upgradesStore.reset();
    windowsStore.step = 0;
    upgradesStore.logs = [];
    router.push("/");
  }
  else {
    upgradesStore.logs.push("Cannot reinstall. Requirements not met.");
  }
};

</script>

<style scoped lang="scss">
.window-content {
  display: grid !important;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  max-width: 800px;
}

.description {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 1.5em;
  padding: 0.25rem 2rem;

}

.controls {
  grid-column: 1 / 3;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.5em;
}

button:last-child {
  margin-left: 0.5rem;
}

p:first-child {
  font-weight: 900;
  font-size: 1.8em;
}

ul {
  list-style-type: disc;
  list-style-position: inside;
}

hr {
  border-color: white;
  border-width: 2px;
}

img {
  border: 2px solid black;
  max-height: 450px;
}

@media (max-width: 700px) {
  .window-content {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }

  .controls {
    width: 100%;
    grid-column: 1 / 2;
  }

  img {
    display: none;
  }

  hr {
    width: 100%;
  }
}
</style>