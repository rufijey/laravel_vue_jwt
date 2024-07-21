import {createRouter, createWebHistory} from "vue-router";
import Main from "@/Pages/Main.vue";
import Fruit from "@/Pages/Fruit.vue";
import Login from "@/Pages/User/Login.vue";
import Registration from "@/Pages/User/Registration.vue";
import Personal from "@/Pages/User/Personal.vue";
import store from "@/store/index.js";


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
        path: '/user/register',
        component: Registration
    },
    {
        path: '/user/personal',
        component: Personal
    },
    {
        path: '*',
        component: Main
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    if(!store.state.isAuth && to.path === '/fruits'){
        return next('/user/login')
    }
    if(store.state.isAuth && (to.path === 'user/login' || to.path === 'user/register')){
        return next('/user/personal')
    }
    next()
})
export default router
