<template>
    <div id="main" class="max-w-[1280px] mx-auto py-10 flex flex-col gap-3 px-5">
      <div class="flex gap-5">
        <button @click="changeView()" class="flex items-center justify-evenly rounded-md layoutSelectionButton">
          <svg class="box-content p-2" :class="{listTypeBtnActive: !viewList}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
          <svg class="box-content p-2" :class="{listTypeBtnActive: viewList}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
        </button>
        <select name="" id="" v-model="orderBy">
          <option value="true">a2z</option>
          <option value="false" selected>z2a</option>
        </select>
      </div>
      <div v-if="!viewList" class="w-full cardContainer gap-3 cardGridView grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <!-- card Grid -->
        <div class="relative z-[0] flex flex-col gap-3 border border-[#d9d9d9] rounded-xl h-full hover:shadow-md" v-for="(contact, index) in filteredContacts" :key="index">
          <div class="profilePicture">
            <img class="rounded-t-xl w-full aspect-video object-cover" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="">
          </div>
          <div class="flex flex-col gap-3 px-5 pb-5 overflow-hidden">
            <span>name : {{ contact.name.slice(0,25) }} <span v-if="contact.name.length > 25">...</span> </span>
            <span>email : {{ contact.email }} </span>
          </div>
          <button class="absolute z-[2] top-4 right-0 w-10 h-10 flex justify-center items-center rounded-md sm:me-5 editButtonGrid bg-[rgba(0,0,0,0.3)]" @click="editContactInit(index)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
          </button>
        </div>
        <!-- end card -->
      </div>
      <div  v-if="viewList" class="w-full cardContainer flex flex-col gap-3">
        <!-- card List-->
        <div class="cardClassList flex justify-between border-b border-[#d9d9d9] p-1 hover:shadow-md" v-for="(contact, index) in filteredContacts" :key="index">
          <div class="w-full flex justify-start md:items-center gap-10">
            <div class="profilePicture">
              <img class="rounded-xl object-cover w-20 aspect-square" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="">
            </div>
            <div class="contactInfo flex flex-col md:flex-row gap-3 md:gap-10 overflow-hidden w-full">
              <span class="w-full md:w-1/2 lg:w-3/10">name : {{ contact.name.slice(0,25) }} <span v-if="contact.name.length > 25">...</span> </span>
              <span class="w-full md:w-1/2 lg:w-3/10">email : {{ contact.email }}</span>
            </div>
          </div>
          <button class="w-16 h-16 flex justify-center items-center hover:bg-[#eee] duration-200 rounded-full sm:me-5" @click="editContactInit(index)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
          </button>
        </div>
        <!-- end card -->
      </div>
      <ed v-if="store.editContact_"/>
    </div>
</template>

<script>
import axios from 'axios';
import { useCounterStore } from '../stores/store.js';
import { computed } from 'vue';
import editContactForm from '../components/editContact.vue'

export default {
  data() {
    return {
      posts: [],
      errors: [],
      viewList: false,
      orderBy: true,
    }
  },
  components:{
    ed: editContactForm
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
      this.store.contacts = response.data.slice(0,10);
      this.store.sortContacts(true);
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  watch:{
    orderBy(value){
      // console.log(value == "true")
      this.store.sortContacts(value === "true")
    }
  },
  methods:{
    changeView(){
      this.viewList = !this.viewList;
      console.log(this.viewList)
    },
    editContactInit(index){
      this.store.editContact(index);
    },
  },
  computed:{
    filteredContacts: function(){
      var filteredContacts_ = []
      for (var i in this.store.contacts){
        if (this.store.contacts[i].name.match(this.store.searchPrompt)){
          filteredContacts_.push(this.store.contacts[i]);
        }
      }
      return filteredContacts_;
    }
  }
}
</script>

<style scoped>
  .listTypeBtnActive{
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
  .layoutSelectionButton svg:hover{
    fill:#0000aa;
  }
  .editButtonGrid,
  .editButtonGrid svg{
    transition: 200ms;
  }
  .editButtonGrid:hover{
    background: #fff;
  }
  .editButtonGrid:hover svg{
    fill: #5f6368;
  }
</style>