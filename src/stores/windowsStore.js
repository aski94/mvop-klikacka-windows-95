import { ref, markRaw, watch, onMounted } from "vue";
import { defineStore } from "pinia";

import MyComputer from "@/components/windows/MyComputer.vue";
import NetworkNeighborhood from "@/components/windows/NetworkNeighborhood.vue";
import Inbox from "@/components/windows/Inbox.vue";
import RecycleBin from "@/components/windows/RecycleBin.vue";
import TheInternet from "@/components/windows/TheInternet.vue";

const KEY = "windowPositions";
const STACK_KEY = "windowStack";

export const useWindowsStore = defineStore("windowsStore", () => {
    const windows = ref([
        {
            name: "My Computer",
            component: markRaw(MyComputer),
            icon: "/images/my-computer.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/my-computer"
        },
        {
            name: "Network Neighborhood",
            component: markRaw(NetworkNeighborhood),
            icon: "/images/network-neighborhood.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/network-neighborhood"
        },
        {
            name: "Inbox",
            component: markRaw(Inbox),
            icon: "/images/inbox.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/inbox"
        },
        {
            name: "Recycle Bin",
            component: markRaw(RecycleBin),
            icon: "/images/recycle-bin.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/recycle-bin"
        },
        {
            name: "The Internet",
            component: markRaw(TheInternet),
            icon: "/images/the-internet.ico",
            isHidden: true,
            x: undefined,
            y: undefined,
            route: "/the-internet"
        }
    ]);

    const step = ref(0);

    const windowStack = ref([]);

    const updateWindowPosition = (index, x, y, isHidden) => {
        windows.value[index].x = x;
        windows.value[index].y = y;
    };

    const resetWindows = () => {
        windows.value.forEach((window) => {
            window.x = undefined;
            window.y = undefined;
            window.isHidden = true;
        });
    };

    const bringToFront = (window) => {
        windowStack.value = windowStack.value.filter(name => name !== window);
        windowStack.value.push(window);
    };

    const getZIndex = (window) => {
        const index = windowStack.value.indexOf(window);
        if (index === -1) return 0;
        return index + 1;
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

        const storedStack = JSON.parse(localStorage.getItem(STACK_KEY) ?? "[]");
        windowStack.value = storedStack.length ? storedStack : windows.value.map(window => window.name);
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

    watch(windowStack, () => {
        localStorage.setItem(STACK_KEY, JSON.stringify(windowStack.value));
    }, { deep: true });

    return { windows, step, bringToFront, getZIndex, updateWindowPosition, resetWindows};
});
