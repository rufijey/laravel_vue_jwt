
import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import App from './App.vue';
import router from "@/router/router.js";
import store from "@/store/index.js";
app.component('app', App);

app
    .use(store)
    .use(router)
    .mount('#app');
