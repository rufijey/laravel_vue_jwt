import router from "@/router/router.js";
import store from '../store';
async function setTokenRefreshTimeout(expires_in) {
    const refreshTime = (expires_in-60)*1000
    if (refreshTime > 0) {
        setTimeout(async () => {
            try {
                const response = await axios.post('/api/auth/refresh', {}, {
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                localStorage.setItem('access_token', response.data.access_token);
                store.commit('setIsAuth', true)
                await setTokenRefreshTimeout(response.data.expires_in)
            } catch (error) {
                console.error('Failed to refresh token', error);
                store.commit('setIsAuth', false)
                router.push('/user/login');
            }
        }, refreshTime);
    }
    else{
        localStorage.removeItem('access_token')
        router.push('/user/login')
    }
}

export default setTokenRefreshTimeout
