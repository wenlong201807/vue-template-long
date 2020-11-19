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


// 路由的渲染流程，钩子的执行顺序
router.beforeEach(async (to, _, next) => {
  console.log(to)

  if (!store.state.hasPermission) { // 如果没有权限，需要获取权限
    // 获取需要添加的路由
    let newRoutes = await store.dispatch('getNewRoute')
    console.log('路由狗子：',newRoutes)
    // 动态添加路由
    // router.addRoutes()
    next()
  } else {
    next()
  }

})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
