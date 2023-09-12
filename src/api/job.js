import instance from '../utils/request'


//获取和搜索选中职位
export function searchjob (data) {
  return instance({
    url: '/api/job/serchjob',
    method: 'POST',
    data,
  })
}

// 获取某一岗位的信息
export function detailjob (data) {
  return instance({
    url: '/api/job/getjob',
    method: 'POST',
    data,
  })
}


