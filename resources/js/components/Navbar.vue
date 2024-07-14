<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="main item">
            Main
        </div>
        <div class="links">
            <div @click="$router.push('/fruits')" class="item">Fruits</div>
            <div @click="$router.push('/user/login')" class="item">Login</div>
            <div @click="$router.push('/user/registration')" class="item">Registration</div>
        </div>
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
        padding: 10px;
        justify-content: space-between;
        align-items: center;
    }
    .links{
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-weight: bold;
    }
    .main{
        font-size: 20px;
        font-weight: bold;
    }
    .item:hover{
        color: darkolivegreen;
    }
</style>
