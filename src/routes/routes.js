import {createRouter, createWebHashHistory} from "vue-router";

// Views
import HomeView from "../views/home.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;