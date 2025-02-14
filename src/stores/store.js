// stores/counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('data', {
    state: () => ({
        addNew_d: false,
        searchPrompt:"",
        editContactIndex:-1,
        editContact_: false,
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
        },
        editContact(index){
            this.editContactIndex = index;
            this.editContact_ = true;
        },
        editContactInfo(editedInfo){
            this.contacts[this.editContactIndex].name = editedInfo.name;
            this.contacts[this.editContactIndex].email = editedInfo.email;
            this.editContactIndex = -1;
            this.editContact_ = false;
        },
        sortFunc(array,order){
            return array.sort((a, b) => {
                if (a.name < b.name) {
                    let o;
                    order ? o = -1 : o = 1;
                    return o; 
                }
                if (a.name > b.name) {
                    let o;
                    order ? o = 1 : o = -1;
                    return o; 
                }
                return 0; 
            });
        },
        sortContacts(order){
            this.contacts = this.sortFunc(this.contacts,order)
            order ? console.log('ordered : a2z') : console.log('ordered : z2a')
        },
    },
});