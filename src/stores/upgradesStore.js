import {ref} from "vue"
import {defineStore} from "pinia"
import {useCounterStore} from "@/stores/counterStore.js"

export const useUpgradesStore = defineStore("upgradesStore", () => {
    const counterStore = useCounterStore();

    const upgrades = ref([
        {
            title: "Better Mouse",
            icon: "src/assets/images/mouse.ico",
            price: 50,
            //price: 5,
            perClick: 1,
            amount: 0
        },
        {
            title: "Better Storage",
            icon: "src/assets/images/storage.ico",
            price: 120,
            perClick: 2,
            amount: 0
        },
        {
            title: "More RAM",
            icon: "src/assets/images/ram.ico",
            price: 300,
            perClick: 3,
            amount: 0
        },
        {
            title: "Faster CPU",
            icon: "src/assets/images/cpu.ico",
            price: 750,
            perClick: 5,
            amount: 0
        }
    ]);

    const logs = ref([]);

    const upgrade = (upgrade) => {
        if (upgrade.price > counterStore.count) {
            console.log("Not enough money");
            logs.value.push("Not enough money!");
            return;
        }

        counterStore.count -= upgrade.price;
        upgrade.amount++;
        counterStore.perClick += upgrade.perClick;
        logs.value.push("Bought" + " " + upgrade.title);
        upgrade.price = Math.floor(upgrade.price * 1.5);

        /*
          console.log("amount: " + upgrade.title + " " + upgrade.amount);
          console.log("perclick: " + counterStore.perClick);
          console.log(upgrade.perClick);
          */
    };

    return {upgrades, upgrade, logs}
})
