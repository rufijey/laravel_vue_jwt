import {createRouter, createWebHistory} from "vue-router";
import Fruit from "@/components/Fruit.vue";
import Main from "@/components/Main.vue";
import Login from "@/components/User/Login.vue";
import Registration from "@/components/User/Registration.vue";
import Personal from "@/components/User/Personal.vue";

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
