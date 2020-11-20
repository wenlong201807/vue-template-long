let Vue;

class VueRouter {
  constructor() {
    this.a = 1
  }
}

VueRouter.install = (_Vue) => {
  // 扩展属性，或者组件，指令
  // 跟组件，深度优先搜索
  Vue = _Vue;
  Vue.mixin({
    // 内部会把  这个对象给每个组件的属性，混合在一起
    beforeCreate() {
      // 判断是否是跟组件
      if (this.$options && this.$options.router) {
        this._router = this.$options.router;
      } else {
        // 让所有的子组件，都有这个 _router 属性，指向当前 router
        this._router = this.$parent && this.$parent.router;
      }

      console.log(this._router.a)
    },
  });
};

export default VueRouter;
