import {createRouter, createWebHistory} from "vue-router";
import Main from "@/Pages/Main.vue";
import Fruit from "@/Pages/Fruit.vue";
import Login from "@/Pages/User/Login.vue";
import Registration from "@/Pages/User/Registration.vue";
import Personal from "@/Pages/User/Personal.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/fruits',
        component: Fruit
    },
    {
        path: '/user/login',
        component: Login
    },
    {
        path: '/user/registration',
        component: Registration
    },
    {
        path: '/user/personal',
        component: Personal
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
