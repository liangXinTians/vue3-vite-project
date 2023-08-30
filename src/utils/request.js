import axios from 'axios'

//创建axios实例
const request = axios.create({
  // baseURL: '/api', // 'http://127.0.0.1:4523/m1/3164017-0-default',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
})