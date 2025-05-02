import {ref, watch} from "vue"
import {defineStore} from "pinia"

const KEY = "count";
const PER_CLICK_KEY = "perClick";
const PER_SECOND_KEY = "perSecond";
const REINSTALL_MULTIPLIER_KEY = "reinstallMultiplier";

export const useCounterStore = defineStore("counterStore", () => {
    const count = ref(Number(localStorage.getItem(KEY) ?? "0"))
    const perClick = ref(Number(localStorage.getItem(PER_CLICK_KEY) ?? "1"))
    const perSecond = ref(Number(localStorage.getItem(PER_SECOND_KEY) ?? "0"));
    const reinstallMultiplier = ref(Number(localStorage.getItem(REINSTALL_MULTIPLIER_KEY) ?? "1"));

    const increment = () => {
        count.value += perClick.value * reinstallMultiplier.value;
    }

    const incrementPerSecond = () => {
        count.value += perSecond.value * reinstallMultiplier.value;
    }

    const reset = () => {
        count.value = 0;
        perClick.value = 1;
        perSecond.value = 0;
    }

    setInterval(incrementPerSecond, 1000);

    watch(() => count.value, () => {
        localStorage.setItem(KEY, count.value);
    })

    watch(() => perClick.value, () => {
        localStorage.setItem(PER_CLICK_KEY, perClick.value);
    })

    watch(() => perSecond.value, () => {
        localStorage.setItem(PER_SECOND_KEY, perSecond.value);
    })

    watch(() => reinstallMultiplier.value, () => {
        localStorage.setItem(REINSTALL_MULTIPLIER_KEY, reinstallMultiplier.value);
    })

    return {count, perClick, perSecond, reinstallMultiplier, increment, reset}
})
