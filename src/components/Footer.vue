<template>
  <footer>
    <router-link to="/" class="start-button">
      <button @click="reset">
        <img src="@/assets/images/windows-95-header.png" alt="Windows 95 logo" />
        <span>Start</span>
      </button>
    </router-link>
    <Apps></Apps>
  </footer>
</template>

<script setup>
import {useWindowsStore} from "@/stores/windowsStore.js";
import Apps from "@/components/Apps.vue";

const windowsStore = useWindowsStore();

const reset = () => {
  windowsStore.resetWindows();
  windowsStore.step = 0;
}
</script>

<style scoped lang="scss">
footer {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  background-color: rgb(195, 195, 195);
  border-top: 3px solid white;
  z-index: 15;

 a{
   text-decoration: none;
 }

  button {
    span {
      font-weight: 900;
      font-size: 1.5rem;
    }
  }
}

:deep(.apps) {
  display: none;
  justify-content: flex-end;
  flex-direction: row;
  padding: 0.25rem;
  column-gap: 0.5rem;
  max-width: unset;
  width: 100%;

  section {

    img {
      width: 100%;
      height: 100%;
    }

    p{
      display: none;
    }
  }
}

@media (max-width: 700px) {
  .apps{
    display: flex;
  }
}
</style>