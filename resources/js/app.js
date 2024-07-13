
import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import App from './App.vue';
import router from "@/router/router.js";
app.component('app', App);

app.use(router)
    .mount('#app');
