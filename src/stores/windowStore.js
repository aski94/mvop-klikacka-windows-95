import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useWindowStore = defineStore("windowStore", () => {
    const windows = ref([
        {
            name: "My computer",
            icon: "src/assets/images/my-computer.ico",
            isHidden: false,
            x: undefined,
            y: undefined
        },
        {
            name: "Network Neighborhood",
            icon: "src/assets/images/network-neighborhood.ico",
            isHidden: true,
            x: undefined,
            y: undefined
        },
        {
            name: "Inbox",
            icon: "src/assets/images/inbox.ico",
            isHidden: true,
            x: undefined,
            y: undefined
        },
        {
            name: "Recycle Bin",
            icon: "src/assets/images/recycle-bin.ico",
            isHidden: true,
            x: undefined,
            y: undefined
        },
        {
            name: "The Internet",
            icon: "src/assets/images/the-internet.ico",
            isHidden: true,
            x: undefined,
            y: undefined
        }
    ]);

    const updateWindowPosition = (index, x, y) => {
        windows.value[index].x = x;
        windows.value[index].y = y;
    };


    return {windows, updateWindowPosition}
})
