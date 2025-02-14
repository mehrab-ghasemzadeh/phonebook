<template>
    <div class="addNewOverlay fixed top-0 left-0 w-svw h-svh flex justify-center items-center">
        <section class="bg-white p-5 rounded-xl">
            <div class="flex flex-col gap-3">
                <input class="w-full border border-[#d9d9d9] rounded-md p-3" type="text" id="newContactName" placeholder="name" v-model="newContactinfo.name">
                <input class="w-full border border-[#d9d9d9] rounded-md p-3" type="mail" id="newContactemail" placeholder="e-mail" v-model="newContactinfo.email">
                <div class="newButtons flex gap-3 justify-center">
                    <button class="cancelBUtton py-2 w-full min-w-20 hover:bg-[#f8f8f8] hover:shadow-md border border-[#d9d9d9] flex justify-center rounded-md" @click="store.editContact_ = !store.editContact_">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#770000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </button>
                    <button class="submitButton py-2 w-full min-w-20 hover:bg-[#f8f8f8] hover:shadow-md border border-[#aaa] flex justify-center rounded-md" @click="editContactSet()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#007700"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { useCounterStore } from '../stores/store.js';
    import { computed } from 'vue';
    export default{
        data(){
            return{
                newContactinfo:{
                    name: this.store.contacts[this.store.editContactIndex].name,
                    email: this.store.contacts[this.store.editContactIndex].email
                }
            }
        },
        methods:{
            editContactSet(){
                this.store.editContactInfo(this.newContactinfo)
            }
        },
        setup(){
            const counterStore = useCounterStore();
            return {
                store: computed(() => counterStore),
            };
        },
    }
</script>

<style scoped>
.addNewOverlay{
    background-color: rgba(0, 0, 0, 0.5);
}
.addNewOverlay section{
    width: clamp(300px, 50%, 800px);
}
.cancelBUtton:hover svg{
    fill: #dd0000;
}
.submitButton:hover svg{
    fill: #00dd00;
}
</style>