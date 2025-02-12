<template>
    <div id="main" class="max-w-[1280px] mx-auto py-10 flex flex-col gap-3">
      <div>
        <button @click="changeView()" class="flex items-center justify-evenly rounded-md">
          <svg class="box-content p-2" :class="{listTypeBtnActive: viewList}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
          <svg class="box-content p-2" :class="{listTypeBtnActive: !viewList}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
        </button>
      </div>
      <div class="w-full cardContainer flex flex-col gap-3" :class="{cardGridView : !viewList}">
        <!-- card -->
        <div class="cardClassList hover:shadow-md" :class="{cardClassGrid : !viewList}" v-for="(contact, index) in store.contacts" :key="index">
          <div class="profilePicture">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg> -->
            <img class="rounded-t-xl object-cover" :class="{'w-20' : viewList , 'rounded-b-xl' : viewList , 'aspect-square' : viewList ,'w-full' : !viewList ,'aspect-video' : !viewList}" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="">
          </div>
          <div class="contactInfo flex gap-10 px-5 pb-5" :class="{cardClassGrid : !viewList}">
            <span>name : {{ contact.name.slice(0,25) }}...</span>
            <span>email : {{ contact.email }}</span>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useCounterStore } from '../stores/store.js';
import { computed } from 'vue';

export default {
  data() {
    return {
      posts: [],
      errors: [],
      viewList: true,
    }
  },
  setup(){
    const counterStore = useCounterStore();
    return {
      store: computed(() => counterStore),
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      this.store.contacts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods:{
    changeView(){
      this.viewList = !this.viewList;
      console.log(this.viewList)
    }
  }
}
</script>

<style scoped>
  .cardClassList{
    border: 1px solid #d9d9d9;
    border-radius: 15px;
    filter: drop-shadow(5px);
    display: flex;
    gap: 2.5rem;
  }
  .cardClassGrid{
    flex-direction: column;
    gap: 1rem
  }
  .cardGridView{
    display: grid;
    grid-template-columns: 30% 30% 30%;
  }
  .listTypeBtnActive{
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
</style>