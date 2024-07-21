<template>
    <div>
        <input-component v-model.trim="registrationForm.name" type="email" placeholder="name"/>
        <input-component v-model.trim="registrationForm.email" type="email" placeholder="email"/>
        <input-component v-model.trim="registrationForm.password" type="password" placeholder="password"/>
        <input-component v-model.trim="registrationForm.password_confirmation" type="password" placeholder="confirm password"/>
        <button-component @click.prevent="store">Submit</button-component>
    </div>
</template>

<script>
import InputComponent from "@/components/UI/InputComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import {Axios} from "axios";
import {getFingerprint} from "@/Services/FingerprintService.js";

export default {
    components: {ButtonComponent, InputComponent},
    data(){
        return{
            registrationForm:{
                name:'',
                email:'',
                password:'',
                password_confirmation: '',
                fingerprint: ''
            },
        }
    },
    methods:{
        async store(){
            this.registrationForm.fingerprint = await getFingerprint();
            axios.post('/api/auth/register', this.registrationForm)
                .then(res=>{
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
