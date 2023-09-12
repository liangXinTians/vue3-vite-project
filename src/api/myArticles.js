import instance from '../utils/request'

// 获取个人文章
export function getMyArticle () {
  return instance({
    url: '/api/article/myarticle',
    method: 'GET',
  })
}

//删除个人文章
export function delArticle (data) {
  return instance({
    url: '/api/article/delarticle',
    method: 'POST',
    data,
  })
}

//获取当前文章
export function getArticle (data) {
  return instance({
    url: '/api/article/art',
    method: 'POST',
    data,
  })
}

//获取当前文章
export function updatearticle (data) {
  return instance({
    url: '/api/article/updatearticle',
    method: 'POST',
    data,
  })
}
