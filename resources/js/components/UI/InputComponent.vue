<template>
    <div>
        <input v-bind="$attrs" :value="modelValue" @input="updateInput" class="input"/>
    </div>
</template>

<script>
export default {
    name:'input-component',
    inheritAttrs: false,
    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input{
    background: none;
    color: cadetblue;
    border: 2px solid cadetblue;
    padding: 5px;
    margin: 5px 0 0 0;
}
</style>
