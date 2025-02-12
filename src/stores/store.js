// stores/counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('data', {
    state: () => ({
        posts:[]
    }),
    actions: {
        
    },
});