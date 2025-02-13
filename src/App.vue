<template>
    <div id="header" class="border-b border-[#d9d9d9] w-full p-5 rounded-b-xl flex flex-row-reverse justify-between sticky top-0 bg-white shadow-xl">
        <div class="projName flex gap-3 items-center">
            <h3>phone book</h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Zm-578 40h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>
        </div>
        <div class="nav flex gap-5" v-if="!searchState">
            <button @click="store.addNew_d = !store.addNew_d" class="navBtn flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
                <span class="hidden md:inline-block">add new contact</span>
            </button>
            <button @click="searchPrompt=''; searchState = !searchState" class="navBtn flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                <span class="hidden md:inline-block">search contact</span>
            </button>
        </div>
        <div v-if="searchState" class="flex gap-3 items-center">
            <button @click="searchState = !searchState" class="navBtn flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-83 0-141.5-58.5T80-280q0-83 58.5-141.5T280-480q83 0 141.5 58.5T480-280q0 83-58.5 141.5T280-80Zm544-40L568-376q-12-13-25.5-26.5T516-428q38-24 61-64t23-88q0-75-52.5-127.5T420-760q-75 0-127.5 52.5T240-580q0 6 .5 11.5T242-557q-18 2-39.5 8T164-535q-2-11-3-22t-1-23q0-109 75.5-184.5T420-840q109 0 184.5 75.5T680-580q0 43-13.5 81.5T629-428l251 252-56 56Zm-615-61 71-71 70 71 29-28-71-71 71-71-28-28-71 71-71-71-28 28 71 71-71 71 28 28Z"/></svg>
            </button>
            <input class="w-48 sm:w-64 border border-[#d9d9d9] rounded-md px-1" type="text" v-model="store.searchPrompt">
            <button @click="searchContact()" class="navBtn flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </button>
        </div>
        <an v-if="store.addNew_d"/>
    </div>
    <router-view></router-view>
    <div id="footer" class="border-t border-[#d9d9d9] p-1 bg-[#eee] rounded-t-xl">
        <h6 class="text-center">all rights reserved for the developers of the system</h6>
    </div>
</template>


<script>
    import addNew from './components/addNew.vue'
    import { useCounterStore } from './stores/store.js';
    import { computed } from 'vue';
    export default{
        watch: {
            $route(to, from) {
                document.title = to.name || "سامانه ثبت شمارات";
            },
        },
        setup(){
            const counterStore = useCounterStore();
            return {
                store: computed(() => counterStore),
            };
        },
        data(){
            return{
                addNew_d: false,
                searchState: false,
            }
        },
        components:{
            an: addNew,
        },
        methods:{
            searchContact(){
                if (this.searchPrompt != ""){
                    alert(this.searchPrompt)
                }
            }
        },
    }
</script>

<style scoped>
.navBtn > span{
    width: 0;
    overflow: hidden;
    transition: 200ms;
    height: 20px;
}
.navBtn svg:hover + span{
    width: 200px;
}
</style>