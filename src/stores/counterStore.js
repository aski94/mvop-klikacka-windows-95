import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counterStore', () => {
    const count = ref(0)

    function increment() {
        count.value++
    }

    return {count, increment}
})
