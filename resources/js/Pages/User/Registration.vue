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

export default {
    components: {ButtonComponent, InputComponent},
    data(){
        return{
            registrationForm:{
                name:'',
                email:'',
                password:'',
                password_confirmation: '',
            },
        }
    },
    methods:{
        store(){
            axios.post('/api/user', this.registrationForm)
                .then(res=>{
                    console.log(res)
                })
            this.$router.push('/user/login')
        }
    }
}
</script>

<style scoped>

</style>
