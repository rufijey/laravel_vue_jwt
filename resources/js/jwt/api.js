import axios from "axios";
import router from "@/router/router.js";
import store from "@/store/index.js";

const api = axios.create();

api.interceptors.request.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return config;
}, error => {

});

api.interceptors.response.use(response => {
    return response;
}, async error => {
    // try{
    //     if (error.response.status === 401) {
    //         error.config._retry = true
    //         if(localStorage.getItem('access_token')){
    //             return await axios.post('api/auth/refresh', {}, {
    //                 headers: {
    //                     'authorization': `Bearer ${localStorage.getItem('access_token')}`
    //                 }
    //             }).then(res => {
    //                 localStorage.setItem('access_token', res.data.access_token);
    //                 error.config.headers.authorization = `Bearer ${res.data.access_token}`;
    //                 return api(error.config);
    //             })
    //
    //         }
    //         else{
    //             router.push('/user/login')
    //         }
    //     }
    // } catch {
    //     localStorage.removeItem('access_token')
    //     router.push('/user/login')
    // }
    localStorage.removeItem('access_token')
    store.commit('setIsAuth', false)
    router.push('/user/login')
});

export default api;
