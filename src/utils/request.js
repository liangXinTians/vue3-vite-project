import axios from 'axios'

//创建axios实例
const instance = axios.create({
  baseURL: 'http://10.10.1.66:8004',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',//默认请求头
  }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前添加请求头
  config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNDMsImlzcyI6Im15LXByb2plY3QiLCJleHAiOjE2OTQ1Njg1MDd9.b2QFka8UJrsS58pMekmWnFfnGYhg2INTjDodn2ielK8'
  return config
}, function (error) {
  // 请求错误时的操作
  return Promise.reject(error)
})

// instance.interceptors.request.use(
//   config => {
//     const storedToken = localStorage.getItem('token')//获取token
//     const token = JSON.parse(storedToken) // 转换token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token._value}` // 将token添加到请求头中
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export default instance