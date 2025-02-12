<template>
    <div id="header" class="border-b border-[#d9d9d9] w-full p-5 rounded-b-xl flex justify-between sticky top-0 bg-white shadow-xl">
        <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Zm-578 40h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>
        </div>
        <div class="nav">
            <h3>phone book</h3>
        </div>
    </div>
    <router-view></router-view>
    <div id="footer" class="border-t border-[#d9d9d9] p-1">
        <h6 class="text-center">all rights reserved for the developers of the system</h6>
    </div>
</template>


<script>
    export default{
        watch: {
            $route(to, from) {
                document.title = to.name || "سامانه ثبت شمارات";
            },
        }
    }
</script>

<style scoped>

</style>