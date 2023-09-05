const routes = [
  {
    path: '/',
    redirect: '/aHome'
  },
  {
    path: '/dashbord',
    name: 'dashbord',
    title: '',
    component: () => import('../views/dashbord.vue'),
    children: [
      {
        path: '/aHome',
        name: 'aHome',
        title: '',
        component: () => import('../views/aHome.vue'),
      },
      {
        path: '/articles',
        name: 'articles',
        titlt: '',
        component: () => import('../views/articles.vue')
      },
      {
        path: '/myArticle',
        name: 'myArticle',
        titlt: '',
        component: () => import('../views/myArticle.vue')
      },
      {
        path: '/article',
        name: 'article',
        titlt: '',
        component: () => import('../views/article.vue')
      },
      {
        path: '/recruit',
        name: 'recruit',
        titlt: '',
        component: () => import('../views/recruit.vue')
      },
      {
        path: '/recruits',
        name: 'recruits',
        titlt: '',
        component: () => import('../views/recruits.vue')
      },
      {
        path: '/jobDetail',
        name: 'jobDetail',
        titlt: '',
        component: () => import('../views/jobDetail.vue')
      },
    ]
  },
  {
    path: '/writeArticle',
    name: 'writeArticle',
    titlt: '',
    component: () => import('../views/writeArticle.vue')
  },
  {
    path: '/updataArticle',
    name: 'updataArticle',
    titlt: '',
    component: () => import('../views/updataArticle.vue')
  },
]
export default routes
