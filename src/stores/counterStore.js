import {ref} from "vue"
import {defineStore} from "pinia"
import {useUpgradesStore} from "@/stores/upgradesStore.js";

export const useCounterStore = defineStore("counterStore", () => {
    const upgradesStore = useUpgradesStore();
    const count = ref(0)
    const perClick = ref(1);

    function increment() {
        count.value += perClick.value;
    }

    return {count, perClick, increment}
})
