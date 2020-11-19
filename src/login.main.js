import Vue from 'vue'
import App from './App.vue'
// import router from './myrouter' // 自定义实现路由
import router from './router'
import store from './store'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ViewUI);

Vue.use(ElementUI);

// 不需要校验路由的白名单
const whiteList = ['/']


// 路由的渲染流程，钩子的执行顺序
router.beforeEach(async (to, _, next) => {
  // console.log('路由钩子中的第一个：跳转路由前执行的：',to, from, next)
  // debugger
  // 判断当前路由是否需要校验的
  if (whiteList.includes(to.path)) {
    return next()
  }
  // 要校验一下，当前用户有没有登录
  let flag = await store.dispatch('validateAction')
  // console.log('flag:', flag)
  if (flag) {
    if (to.name === 'login') {
      next('/')
    } else {
      next() // 登陆过，而且不是login 页面，那就 正常跳转就可以
    }
  } else {
    // 没有登陆过，如果这条路由，还需要登录，那么就跳转到登录页面
    // /product/get   /product/add  /product/delete  这个页面，可以会模糊匹配
    // 需要特别考虑
    const flags = to.matched.some(item => item.meta.needLogin)
    if (flags) {
      next() // 暂时不用这个功能***开发使用
      // next('/login') // 正常使用的
    } else {
      next()
    }
  }

  // 暂时不用这个功能
  next()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
