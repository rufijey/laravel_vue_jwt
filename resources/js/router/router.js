import {createRouter, createWebHistory} from "vue-router";
import Fruit from "@/components/Fruit.vue";
import Main from "@/components/Main.vue";

const routes = [
    {
        path: '/fruits',
        component: Fruit
    },
    {
        path: '/',
        component: Main
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
