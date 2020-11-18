import Link from './myrouter-link'
import View from './myrouter-view'
// 1.实现一个插件：挂载$router // 只需要实现一个install方法即可

let Vue;
class MyVueRouter { 
  constructor(options) { 
    this.$options = options
    console.log(this.$options);
  }
}


MyVueRouter.install = function (_Vue) {
  // 保存构造函数，在MyVueRouter里面使用
  Vue = _Vue;

  // 挂载$router
  // 怎么获取根实例中的router选项
  Vue.mixin({
    beforeCreate() {
      // 确保根实例的时候才执行
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }

    }
  })


  // 任务2：实现两个全局组件router-link和router-view
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default MyVueRouter