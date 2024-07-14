<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <th scope="row">{{ fruit.id }}</th>
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            fruits: [
                {
                    id: null,
                    name: '',
                    price: null
                }
            ],
        }
    },
    methods: {
        getFruits() {
            console.log(localStorage.getItem('access_token'))
            axios.get('/api/auth/fruit', {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    console.log(res.data.data);
                    this.fruits = res.data.data
                })
        }
    },
    mounted() {
        this.getFruits()
    }
}
</script>

<style scoped>

</style>
