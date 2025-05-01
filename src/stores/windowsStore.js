// Use of markRaw to prevent Vue from reactively tracking the component, which avoids unnecessary performance overhead and prevents warnings. https://vuejs.org/api/reactivity-advanced.html#markraw
import {ref, markRaw} from "vue"
import {defineStore} from "pinia"

import MyComputer from "@/components/windows/MyComputer.vue";
import NetworkNeighborhood from "@/components/windows/NetworkNeighborhood.vue";
import Inbox from "@/components/windows/Inbox.vue";
import RecycleBin from "@/components/windows/RecycleBin.vue";
import TheInternet from "@/components/windows/TheInternet.vue";

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

    const updateWindowPosition = (index, x, y) => {
        windows.value[index].x = x;
        windows.value[index].y = y;
    };


    return {windows, updateWindowPosition}
})
