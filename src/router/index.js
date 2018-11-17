// 这里面负责写路由映射，便于管理

// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: [
    {
      path: '/pollens', component: require('../components/Home.vue')
    },
    {
      path: '/search', 
      component: require('../components/Search-1.vue')
    },
    {
      path: '/family', 
      component: require('../components/Search-2.vue')
    },
    {
        path: '/pollen', component: require('../components/Pollen.vue')
    },
    {
      path: '*', redirect: '/pollens'
    }
  ]
})

// 输出router
export default router
