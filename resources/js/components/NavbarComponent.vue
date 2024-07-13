<template>
    <div class="navbar">
        <div @click="$router.push('/')">Main</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar{
        height: 50px;
        background-color: cadetblue;
        display: flex;
    }
</style>
