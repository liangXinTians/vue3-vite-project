<<<<<<< HEAD
import axios from 'axios'
// import { getToken } from './auth'; 获取token

//创建axios实例
const instance = axios.create({
  baseURL: '',
  timeout: 5000,
})

instance.interceptors.request.use(
  config => {
    const token = getToken() // 获取token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}` // 将token添加到请求头中
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
=======
import axios from 'axios'

//创建axios实例
const request = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
})
>>>>>>> 92a55ab88cc3ce9d4c437b68989abde073697752
