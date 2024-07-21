import {createStore} from "vuex";

export default createStore({
    state:{
        isAuth:false,
    },
    mutations:{
        setIsAuth(state, bool){
            state.isAuth = bool
        }
    },
    actions:{
        checkAuth({commit}){
            const expires_time = localStorage.getItem('expires_time')
            const access_token = localStorage.getItem('access_token')
            commit('setIsAuth', !!(expires_time > Date.now() && access_token))
        }
    },
    getters:{
    }
})
