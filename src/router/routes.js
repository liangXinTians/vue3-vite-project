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
        path: '/aHeader',
        name: 'aHeader',
        title: '',
        component: () => import('../views/aHeader.vue'),
      }
    ]
  }
]
export default routes
