import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie'

const refreshTokenFunction = async () => {
    try{
        let cookieRefresh = Cookies.get('refresh')
        const res = await axios.post('/api/refresh', {
            token: cookieRefresh
        })
        Cookies.set('jwt', res.data.accessToken, {expires:2})
        Cookies.set('refresh', res.data.refreshToken, {expires: 2})
        return res.data
    } catch(err) {
        console.log(err)
    }
}

const axiosJWT = axios.create();
axiosJWT.interceptors.request.use(
    async(config)=> {
        let currentDate = new Date();
        let cookieToken = Cookies.get('jwt')
        const decodedToken = jwt_decode(cookieToken)
        if(decodedToken.exp * 1000 < currentDate.getTime()) {
            const data = await refreshTokenFunction()
            config.headers['authorization'] = "Bearer " + data.accessToken
        }
        return config;
    }, (err)=> {
        return Promise.reject(err)
    }
)

/* const handleDelete = async () => {
        try{
            let cookieToken = Cookies.get('jwt')
            await axiosJWT.delete(`/api/login/delete`, {
              headers: {authorization: "Bearer " + cookieToken}
            })
            console.log('success')
          } catch(err) {
            console.log(err)
          }
    } */
module.exports = {
    refreshTokenFunction
}