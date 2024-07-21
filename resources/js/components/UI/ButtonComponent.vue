<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-component'

}
</script>

<style scoped>
.button{
  padding: 5px 5px;
  background: none;
  color: deepskyblue;
  border: 2px solid deepskyblue;
  margin-top: 5px;
}
.button:hover{
  color: skyblue;
  border: 2px solid skyblue;
}
</style>
