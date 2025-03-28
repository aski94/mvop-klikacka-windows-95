import {ref} from "vue"
import {defineStore} from "pinia"
import {useCounterStore} from "@/stores/counterStore.js"

export const useUpgradesStore = defineStore("upgradesStore", () => {
    const counterStore = useCounterStore();

    const upgrades = ref([
        {
            title: "Better mouse",
            icon: "src/assets/images/mouse.ico",
            price: 50,
            perClick: 1,
            amount: 0
        },
        {
            title: "Better storage",
            icon: "src/assets/images/storage.ico",
            price: 120,
            perClick: 3,
            amount: 0
        },
        {
            title: "More RAM",
            icon: "src/assets/images/ram.ico",
            price: 300,
            perClick: 7,
            amount: 0
        },
        {
            title: "Faster CPU",
            icon: "src/assets/images/cpu.ico",
            price: 750,
            perClick: 15,
            amount: 0
        }
    ]);

    const upgrade = (upgrade) => {
        if (upgrade.price > counterStore.count) {
            console.log("Not enough money");
            return;
        }

        counterStore.count -= upgrade.price;
        upgrade.amount++;
        counterStore.perClick += upgrade.perClick;
        upgrade.price = Math.floor(upgrade.price * 1.75);

        console.log("amount: " + upgrade.title + " " + upgrade.amount);
        console.log("perclick: " + counterStore.perClick);
        console.log(upgrade.perClick);
    };

    return {upgrades, upgrade}
})
