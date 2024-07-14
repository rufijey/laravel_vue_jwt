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
  color: cadetblue;
  border: 2px solid cadetblue;
  margin-top: 5px;
}
.button:hover{
  color: blue;
  border: 2px solid teal;
}
</style>
