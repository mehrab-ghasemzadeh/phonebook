// stores/counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('data', {
    state: () => ({
        posts:[],
        addNew_d: false,
        searchPrompt:"",
    }),
    actions: {
        getRandomInt() {
            return Math.floor(Math.random() * 309393759);
        },
        addNewContact_(info){
            this.contacts.push({
                body: '',
                email: info.email,
                id: this.getRandomInt(),
                name: info.name,
                postId: this.getRandomInt(),
            })
            this.addNew_d = false;
        }
    },
});