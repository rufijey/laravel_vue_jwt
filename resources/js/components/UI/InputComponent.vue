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
    color: deepskyblue;
    border: 2px solid deepskyblue;
    padding: 5px;
    margin: 5px 0 0 0;
    outline:none;
}
.input:focus {
    color: skyblue;
    border: 2px solid fuchsia;
    padding: 5px;
    border-radius: 3px;
}

</style>
