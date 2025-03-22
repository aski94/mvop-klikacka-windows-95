import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useWindowStore = defineStore("windowStore", () => {
    const windows = ref([
        {
            name: "My computer",
            icon: "src/assets/images/my-computer.ico",
            isHidden: false

        },
        {
            name: "Network Neighborhood",
            icon: "src/assets/images/network-neighborhood.ico",
            isHidden: false

        },
        {
            name: "Inbox",
            icon: "src/assets/images/inbox.ico",
            isHidden: false

        },
        {
            name: "Recycle Bin",
            icon: "src/assets/images/recycle-bin.ico",
            isHidden: false

        },
        {
            name: "The Internet",
            icon: "src/assets/images/the-internet.ico",
            isHidden: false
        }
    ]);

    return {windows}
})
