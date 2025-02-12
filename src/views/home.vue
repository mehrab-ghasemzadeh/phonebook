<template>
    <div id="main" class="max-w-[1280px] mx-auto py-10 flex flex-col gap-3 px-5">
      <div>
        <button @click="changeView()" class="flex items-center justify-evenly rounded-md">
          <svg class="box-content p-2" :class="{listTypeBtnActive: !viewList}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
          <svg class="box-content p-2" :class="{listTypeBtnActive: viewList}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
        </button>
      </div>
      <div class="w-full cardContainer flex flex-col gap-3" :class="{cardGridView : !viewList}">
        <!-- card -->
        <div class="cardClassList hover:shadow-md" :class="{cardClassGrid : !viewList}" v-for="(contact, index) in store.contacts" :key="index">
          <div class="profilePicture">
            <img class="rounded-t-xl object-cover" :class="{'md:w-20' : viewList , 'h-32' : viewList , 'md:h-auto' : viewList , 'rounded-b-xl' : viewList , 'aspect-square' : viewList ,'w-full' : !viewList ,'aspect-video' : !viewList}" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="">
          </div>
          <div class="contactInfo flex gap-10 px-5 pb-5 overflow-hidden" :class="{cardClassGrid : !viewList, 'flex-col' : viewList, 'md:flex-row' : viewList, 'md:items-center' : viewList}">
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
      viewList: false,
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
      this.store.contacts = response.data.slice(0,20)
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
    gap: 1rem;
    height: 100%;
  }
  .cardGridView{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
  }
  .listTypeBtnActive{
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
</style>