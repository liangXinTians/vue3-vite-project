import instance from '../utils/request'

// 注册
export function mailregister (data) {
  return instance({
    url: 'api/user/mailregister',
    method: 'POST',
    data,
  })
}

// 验证码
export function mailvef (data) {
  return instance({
    url: 'api/user/mailvef',
    method: 'POST',
    data,
  })
}

//登录
export function login (data) {
  return instance({
    url: 'api/user/login',
    method: 'POST',
    data,
  })
}

//获取个人数据
export function info () {
  return instance({
    url: '/api/user/userinfo',
    method: 'GET',
  })
}
