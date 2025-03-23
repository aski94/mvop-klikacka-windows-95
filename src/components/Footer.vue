<template>
  <footer>
    <button>
      <img src="@/assets/images/windows-95-header.png" alt="Windows 95 logo">
      <span>Start</span>
    </button>
    <Apps></Apps>
  </footer>
</template>

<script setup>
import Apps from './Apps.vue';
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

  button {
    span {
      font-weight: 900;
      font-size: 1.5rem;
    }
  }
}

:deep(.apps) {
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
</style>