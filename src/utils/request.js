import axios from 'axios'

//创建axios实例
const request = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
})