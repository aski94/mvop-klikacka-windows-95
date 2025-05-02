import {ref, watch} from "vue"
import {defineStore} from "pinia"
import {useUpgradesStore} from "@/stores/upgradesStore.js";

const KEY = "count";
const PER_CLICK_KEY = "perClick";
const PER_SECOND_KEY = "perSecond";

export const useCounterStore = defineStore("counterStore", () => {
    const upgradesStore = useUpgradesStore();
    const count = ref(Number(localStorage.getItem(KEY) ?? "0"))
    const perClick = ref(Number(localStorage.getItem(PER_CLICK_KEY) ?? "1"))
    const perSecond = ref(Number(localStorage.getItem(PER_SECOND_KEY) ?? "0"));

    function increment() {
        count.value += perClick.value;
    }

    function incrementPerSecond(){
        count.value += perSecond.value;
    }

    setInterval(incrementPerSecond, 1000);

    watch(() => count.value, () => {
        localStorage.setItem(KEY, count.value);
    })

    watch(perClick, () => {
        localStorage.setItem(PER_CLICK_KEY, perClick.value);
    })

    watch(perSecond, () => {
        localStorage.setItem(PER_SECOND_KEY, perSecond.value);
    })

    return {count, perClick, perSecond, increment}
})
