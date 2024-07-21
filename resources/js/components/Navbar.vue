<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="main item">
            Main
        </div>
        <div class="links">
            <div v-show="isAdmin" @click="$router.push('/admin')" class="item">Admin</div>
            <button-component class="logout__btn" @click="logout" v-show="$store.state.isAuth">Logout</button-component>
            <div v-show="$store.state.isAuth" @click="$router.push('/fruits')" class="item">Fruits</div>
            <div v-show="!$store.state.isAuth" @click="$router.push('/user/login')" class="item">Login</div>
            <div v-show="!$store.state.isAuth" @click="$router.push('/user/register')" class="item">Registration</div>
        </div>
    </div>
</template>

<script>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import api from "@/api.js";
import {getFingerprint} from "@/Services/FingerprintService.js";

export default {
    components: {ButtonComponent},
    data(){
        return{
            isAdmin: false
        }
    },
    methods:{
        async logout(){
            const fingerprint = await getFingerprint();
            api.post('/api/auth/logout', fingerprint)
                .then(res=>{
                    this.$router.push('/user/login')
                    localStorage.clear()
                    this.$store.dispatch('checkAuth')
                })
        },
        checkAdmin(){
            if(localStorage.getItem('role')){
                this.isAdmin = localStorage.getItem('role') === 'admin'
            }
            else{
                this.isAdmin = false
            }
        },

    },
    mounted(){
        this.checkAdmin()
    },
    updated(){
        this.checkAdmin()
    }

}
</script>

<style scoped>
    .navbar{
        height: 7vh;
        background-color: darkgray;
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
    }
    .links{
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-weight: bold;
        align-items: center;
    }
    .main{
        font-size: 20px;
        font-weight: bold;
    }
    .item:hover{
        color: darkolivegreen;
    }
    .logout__btn{
        margin-top: 0;
    }
</style>
