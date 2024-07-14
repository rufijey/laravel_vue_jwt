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

export default {
    components: {ButtonComponent, InputComponent},
    data(){
        return{
            user:{
                email:'',
                password:''
            },
        }
    },
    methods:{
        login(){
            axios.post('/api/auth/login', this.user)
                .then(res=>{
                    if(res.status===200){
                        localStorage.setItem('access_token', res.data.access_token)
                        this.$router.push('/user/personal')
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
