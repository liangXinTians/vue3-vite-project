import request from '../utils/request'

// 登录
export function infoLogin (data) {
  return request({
    url: 'api/user/login',
    method: 'POST',
    data,
  })
}
