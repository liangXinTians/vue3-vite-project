import administratorHome from "../views/administrator/administratorHome.vue"
import chartMain from "../views/administrator/chartMain.vue"
import manageMain from '../views/administrator/manageMain.vue'
import stationMain from "../views/administrator/stationMain.vue"
const routes = [
  {
    path:'/',
    name:"administratorHome",
    title: '',
    component:administratorHome,
    children:[
      {
        path:'chartMain',
        name:'chartMain',
        component:chartMain
      },
      {
        path:'manageMain',
        name:'manageMain',
        component:manageMain
      },
      {
        path:'stationMain',
        name:'stationMain',
        component:stationMain
      },
    ]
  },
  // {
  //   path:'/manageMain',
  //   name:"manageMian",
  //   title: '',
  //   component:manageMain
  // }
]
export default routes
