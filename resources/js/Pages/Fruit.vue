<template>
    <div>
        <table class="table" v-if="dataLoaded">
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
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import axios from "axios";
import api from "../jwt/api.js";
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
            dataLoaded: false
        }
    },
    methods: {
        getFruits() {
            api.get('/api/auth/fruit')
                .then(res => {
                    this.fruits = res.data.data
                    this.dataLoaded = true
                })

        },

    },
    mounted() {
        this.getFruits()
    }
}
</script>

<style scoped>

</style>
