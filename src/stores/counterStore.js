import {ref, watch} from "vue"
import {defineStore} from "pinia"
import {useUpgradesStore} from "@/stores/upgradesStore.js";

const KEY = "count";

export const useCounterStore = defineStore("counterStore", () => {
    const upgradesStore = useUpgradesStore();
    const count = ref(Number(localStorage.getItem(KEY) ?? "0"))
    const perClick = ref(1);

    function increment() {
        count.value += perClick.value;
    }

   watch(() => count.value, () => {
       localStorage.setItem(KEY, count.value);
   })

    return {count, perClick, increment}
})
