<template>
  <article
      v-for="(window, index) in windowsStore.windows"
      :key="index"
      class="window"
      :class="{
  hidden: window.isHidden,
  centered: window.x === undefined && window.y === undefined
}" :style="{
    zIndex: window.zIndex,
    ...(window.x !== undefined && window.y !== undefined ? { left: `${window.x}px`, top: `${window.y}px` } : {})
}"

  >
    <section class="title-bar" ref="windowRefs">
      <section>
        <img :src="window.icon" :alt="window.name">
        <p>{{ window.name }}</p>
      </section>
      <button @click="close(window)">
        <span>X</span>
      </button>
    </section>
    <component :is="window.component"></component>
  </article>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useDraggable} from "@vueuse/core";
import {useWindowsStore} from "@/stores/windowsStore.js";

const windowsStore = useWindowsStore();

const close = (window) => {
  //console.log("close");
  window.isHidden = true;
  if (window.name === "Recycle Bin"){
    windowsStore.step = 0;
  }
}

'<! – Source: https://stackoverflow.com/questions/78889656/vueuse-usedraggable-with-svg-and-v-for – ->'
const windowRefs = ref([]);

onMounted(() => {
  windowRefs.value.forEach((el, index) => {
    useDraggable(el, {
      onMove: ({x, y}) => {
        windowsStore.updateWindowPosition(index, x, y);
      },
      onStart: () => {
        windowsStore.windows.forEach((w) => {
          w.zIndex = 0;
        });
        windowsStore.windows[index].zIndex = 10;
      }
    });
  });
});
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
  position: fixed;
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

.centered {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20rem;
  height: 100%;
  width: 100%;
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


@media (max-width: 1100px) {
  .title-bar {
    column-gap: 20rem;
  }
}
</style>