import request from '../utils/request'

// post方法
export function 方法名字 (data) {
  return request({
    url: '',
    method: 'POST',
    data,
  })
}

//get方法
export function setExperimentId () {
  return request({
    url: '/ExperimentCon/setExperimentIdToSession',
    method: 'Get',
  })
}

