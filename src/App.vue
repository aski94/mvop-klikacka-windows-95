<template>
  <Desktop v-if="!isMobile"/>
  <RouterView v-else/>
  <Footer></Footer>

</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import {useRouter} from "vue-router";

import Footer from "@/components/Footer.vue";
import Desktop from "@/components/Desktop.vue";


const isMobile = ref(window.innerWidth <= 700);
const router = useRouter();

const handleResize = () => {
  const mobile = window.innerWidth <= 700;
  if (mobile !== isMobile.value) {
    isMobile.value = mobile;

    if (mobile) {
      router.push("/");
    }

    else {
      router.push("/");
    }
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>