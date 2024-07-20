import {createStore} from "vuex";

export default createStore({
    state:{
        isAuth:false,
    },
    mutations:{
        setIsAuth(state, bool){
            state.isAuth = bool
        }
    }
})
