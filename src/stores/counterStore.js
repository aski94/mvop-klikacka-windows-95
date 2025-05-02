import {ref, watch, onMounted} from "vue"
import {defineStore} from "pinia"
import {useUpgradesStore} from "@/stores/upgradesStore.js";

const KEY = "count";
const PER_CLICK_KEY = "perClick";
const PER_SECOND_KEY = "perSecond";
const REINSTALL_MULTIPLIER_KEY = "reinstallMultiplier";
const DATE_KEY = "lastActive";

export const useCounterStore = defineStore("counterStore", () => {
    const upgradesStore = useUpgradesStore();

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
        localStorage.setItem(DATE_KEY, new Date().toISOString());
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

    onMounted(() => {
        const lastActive = localStorage.getItem(DATE_KEY);

        if (!lastActive) return;

        const lastActiveDate = new Date(lastActive);
        const current = new Date();

        const diff = (current - lastActiveDate) / 1000;

        if (diff < 5) return;

        const toAdd = Math.floor(diff * perSecond.value * reinstallMultiplier.value * 0.2);

        count.value += toAdd;

        upgradesStore.logs.push("System restored +" + toAdd + " recovered while offline");
    })

    return {count, perClick, perSecond, reinstallMultiplier, increment, reset}
})
