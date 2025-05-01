import {ref, watch} from "vue"
import {defineStore} from "pinia"
import {useUpgradesStore} from "@/stores/upgradesStore.js";

const KEY = "count";
const PER_CLICK_KEY = "perClick";

export const useCounterStore = defineStore("counterStore", () => {
    const upgradesStore = useUpgradesStore();
    const count = ref(Number(localStorage.getItem(KEY) ?? "0"))
    const perClick = ref(Number(localStorage.getItem(PER_CLICK_KEY) ?? "1"))

    function increment() {
        count.value += perClick.value;
    }

    watch(() => count.value, () => {
        localStorage.setItem(KEY, count.value);
    })

    watch(perClick, () => {
        localStorage.setItem(PER_CLICK_KEY, perClick.value);
    });

    return {count, perClick, increment}
})
