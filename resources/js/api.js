import axios from "axios";
import router from "@/router/router.js";
import store from "@/store/index.js";
import {getFingerprint} from "@/Services/FingerprintService.js";


const api = axios.create();
api.interceptors.request.use(async config => {

    const expires_time = localStorage.getItem('expires_time');
    if (expires_time< Date.now()) {
        try {
            if (localStorage.getItem('access_token')) {
                const fingerprint = await getFingerprint();
                await axios.post('api/auth/refresh', {
                    'fingerprint': fingerprint
                }, {
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                }).then(res=>{
                    localStorage.setItem('access_token', res.data.access_token);
                    const expires_time =Date.now() + res.data.expires_in*1000
                    localStorage.setItem('expires_time', expires_time)
                    config.headers.authorization = `Bearer ${res.data.access_token}`
                    store.dispatch("checkAuth")
                })
            }
        } catch (err) {
            store.dispatch("checkAuth")
            router.push('/user/login');
        }
    }
    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    else{
        store.dispatch("checkAuth")
        router.push('/user/login');
    }
    return config;
}, error => {
    store.dispatch("checkAuth")
    router.push('/user/login');
});

api.interceptors.response.use(response => {
    return response;
}, async error => {

});

export default api;
