<template>
    <div>
        <input-component v-model.trim="user.email" type="email" placeholder="email"/>
        <input-component type="password" placeholder="password"/>
        <button-component >Submit</button-component>
    </div>
</template>

<script>
import InputComponent from "@/components/UI/InputComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

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
}
</script>

<style scoped>

</style>
