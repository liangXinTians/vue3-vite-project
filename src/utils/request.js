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