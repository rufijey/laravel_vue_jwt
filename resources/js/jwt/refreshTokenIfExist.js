import setTokenRefreshTimeout from "@/jwt/setTokenRefreshTimeout.js";
import store from '../store';
async function refreshTokenIfExist(){
    if(localStorage.access_token){
        try {
            await axios.post('/api/auth/refresh', {}, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(async res=>{
                localStorage.setItem('access_token', res.data.access_token);
                store.commit('setIsAuth', true)
                await setTokenRefreshTimeout(res.data.expires_in)
            })
        } catch (error) {
            console.error('Failed to refresh token', error);
        }

    }
}

export default refreshTokenIfExist
