import { ref, markRaw, watch, onMounted } from "vue";
import { defineStore } from "pinia";

import MyComputer from "@/components/windows/MyComputer.vue";
import NetworkNeighborhood from "@/components/windows/NetworkNeighborhood.vue";
import Inbox from "@/components/windows/Inbox.vue";
import RecycleBin from "@/components/windows/RecycleBin.vue";
import TheInternet from "@/components/windows/TheInternet.vue";

const KEY = "windowPositions";

export const useWindowsStore = defineStore("windowsStore", () => {
    const windows = ref([
        {
            name: "My computer",
            component: markRaw(MyComputer),
            icon: "src/assets/images/my-computer.ico",
            isHidden: false,
            x: undefined,
            y: undefined,
            route: "/my-computer"
        },
        {
            name: "Network Neighborhood",
            component: markRaw(NetworkNeighborhood),
            icon: "src/assets/images/network-neighborhood.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/network-neighborhood"
        },
        {
            name: "Inbox",
            component: markRaw(Inbox),
            icon: "src/assets/images/inbox.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/inbox"
        },
        {
            name: "Recycle Bin",
            component: markRaw(RecycleBin),
            icon: "src/assets/images/recycle-bin.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/recycle-bin"
        },
        {
            name: "The Internet",
            component: markRaw(TheInternet),
            icon: "src/assets/images/the-internet.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/the-internet"
        }
    ]);

    const updateWindowPosition = (index, x, y, isHidden) => {
        windows.value[index].x = x;
        windows.value[index].y = y;
    };

    const resetWindows = () => {
        windows.value.forEach((window) => {
            window.x = undefined;
            window.y = undefined;
            window.isHidden = window.name !== "My computer";
        });
    };

    onMounted(() => {
        const storedWindows = JSON.parse(localStorage.getItem(KEY) ?? "[]");
        for (let i = 0; i < windows.value.length; i++) {
            const stored = storedWindows.find(w => w.name === windows.value[i].name);

            if (stored) {
                windows.value[i].x = stored.x ?? windows.value[i].x;
                windows.value[i].y = stored.y ?? windows.value[i].y;
                windows.value[i].isHidden = stored.isHidden !== undefined ? stored.isHidden : windows.value[i].isHidden;
            }
        }
    });

    watch(() => windows.value, () => {
        const positions = windows.value.map(window => ({
            name: window.name,
            x: window.x,
            y: window.y,
            isHidden: window.isHidden
        }));
        localStorage.setItem(KEY, JSON.stringify(positions));
    }, { deep: true });

    return { windows, updateWindowPosition, resetWindows};
});
