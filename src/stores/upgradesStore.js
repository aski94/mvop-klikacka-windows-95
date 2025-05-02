import {ref, watch, onMounted} from "vue"
import {defineStore} from "pinia"
import {useCounterStore} from "@/stores/counterStore.js"

const KEY = "upgrades";

export const useUpgradesStore = defineStore("upgradesStore", () => {
    const counterStore = useCounterStore();

    const upgrades = ref([
        {
            title: "Better Mouse",
            icon: "/images/mouse.ico",
            price: 500,
            //price: 5,
            priceMultiplier: 1.3,
            perClick: 1,
            perSecond: 0,
            amount: 0
        },
        {
            title: "Better Storage",
            icon: "/images/storage.ico",
            price: 150,
            priceMultiplier: 1.15,
            perClick: 0,
            perSecond: 1,
            amount: 0
        },
        {
            title: "More RAM",
            icon: "/images/ram.ico",
            price: 2000,
            priceMultiplier: 1.15,
            perClick: 0,
            perSecond: 8,
            amount: 0
        },
        {
            title: "Faster CPU",
            icon: "/images/cpu.ico",
            price: 25000,
            priceMultiplier: 1.15,
            perClick: 0,
            perSecond: 45,
            amount: 0
        },
        {
            title: "Faster GPU",
            icon: "/images/gpu.ico",
            price: 300000,
            priceMultiplier: 1.15,
            perClick: 0,
            perSecond: 250,
            amount: 0
        },
        {
            title: "Faster Internet",
            icon: "/images/internet.ico",
            price: 3500000,
            priceMultiplier: 1.15,
            perClick: 0,
            perSecond: 1500,
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
        counterStore.perSecond += upgrade.perSecond;
        logs.value.push("Bought" + " " + upgrade.title);
        upgrade.price = Math.floor(upgrade.price * upgrade.priceMultiplier);

        /*
          console.log("amount: " + upgrade.title + " " + upgrade.amount);
          console.log("perclick: " + counterStore.perClick);
          console.log(upgrade.perClick);
          */
    };

    const reset = () => {
        upgrades.value.forEach((upgrade) => {
            upgrade.amount = 0;
        });
    };

    onMounted(() => {
        const storedUpgrades = JSON.parse(localStorage.getItem(KEY) ?? "[]");

        for(let upgrade of upgrades.value) {
            const stored = storedUpgrades.find(u => u.title == upgrade.title);

            if(stored) {
                upgrade.amount = stored.amount;
                upgrade.price = stored.price;
            }
        }
    });

    watch(() => upgrades.value, () => {
        localStorage.setItem(KEY, JSON.stringify(upgrades.value));
    }, {
        deep: true
    });

    return {upgrades, upgrade, logs, reset}
})
