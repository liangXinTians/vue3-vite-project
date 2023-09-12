import instance from '../utils/request'

// add文章
export function addArticle (data) {
  return instance({
    url: '/api/article/addmyarticle',
    method: 'POST',
    data,
  })
}

// 获取文章
export function getArticle (data) {
  return instance({
    url: '/api/article/articles',
    method: 'POST',
    data,
  })
}

//点赞
export function goodArticle (data) {
  return instance({
    url: '/api/article/likeadd',
    method: 'POST',
    data,
  })
}

//搜索文章
export function searchArticle (data) {
  return instance({
    url: '/api/article/article',
    method: 'POST',
    data,
  })
}

// 文章详细数据
export function articleDetail (data) {
  return instance({
    url: '/api/article/art',
    method: 'POST',
    data,
  })
}