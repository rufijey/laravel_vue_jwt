<template>
    <div>
        <input-component v-model.trim="user.email" type="email" placeholder="email"/>
        <input-component v-model.trim="user.password" type="password" placeholder="password"/>
        <button-component @click="login">Submit</button-component>
    </div>
</template>

<script>
import InputComponent from "@/components/UI/InputComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import axios from "axios";
import {getFingerprint} from "@/Services/FingerprintService.js";

export default {
    components: {ButtonComponent, InputComponent},
    data(){
        return{
            user:{
                email:'',
                password:'',
                fingerprint:''
            },
        }
    },
    methods:{
        async login(){
            this.user.fingerprint = await getFingerprint();
            await axios.post('/api/auth/login', this.user)
                .then(async res=>{
                    if(res.status===200){
                        localStorage.setItem('access_token', res.data.access_token)
                        const expires_time =Date.now() + res.data.expires_in*1000
                        localStorage.setItem('expires_time', expires_time)
                        this.$store.dispatch("checkAuth")
                        this.$router.push('/user/personal')
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
