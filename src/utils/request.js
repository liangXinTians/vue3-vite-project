import axios from 'axios'

//创建axios实例
const instance = axios.create({
  baseURL: 'http://10.10.1.51:8000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',//默认请求头
  }
})

instance.interceptors.request.use(
  config => {
    const storedToken = localStorage.getItem('token')//获取token
    const token = JSON.parse(storedToken) // 转换token
    if (token) {
      config.headers.Authorization = `Bearer ${token._value}` // 将token添加到请求头中
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance