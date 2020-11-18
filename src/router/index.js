import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 1.应用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/parentlist',
    name: 'parentlist',
    component: () => import(/* webpackChunkName: "ParentList" */ '../views/ParentList.vue')
  },
  {
    path: '/ParentIview',
    name: 'ParentIview',
    component: () => import(/* webpackChunkName: "ParentIview" */ '../views/ParentIview.vue'),
    meta:{needLogin:true,limit:'iviewAdmin'}
  },
  {
    path: '/JWT',
    name: 'JWT',
    component: () => import(/* webpackChunkName: "JWT" */ '../views/JWT.vue'),
    meta:{needLogin:true,limit:'iviewAdmin superAdmin'}
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    // meta:{needLogin:true,limit:'superAdmin'}
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
    meta:{needLogin:true,limit:'superAdmin'} // 自己增加的备注，额外一些数据
  },
  {
    path: '/ParentCascader',
    name: 'ParentCascader',
    component: () => import(/* webpackChunkName: "ParentCascader" */ '../views/ParentCascader.vue'),
    meta:{needLogin:true,limit:'superAdmin'} // 自己增加的备注，额外一些数据
  },
]

// 2.创建实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
