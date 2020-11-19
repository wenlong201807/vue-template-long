<template>
  <div id="app">
    <div id="nav">
      <router-link class="kk" to="/">首页</router-link>
      <router-link class="kk" to="/Login">登录(登录权限)</router-link>
      <router-link class="kk" to="/Profile">个人中心(登录权限)</router-link>

      <router-link class="kk" to="/cart">购物车</router-link>
      <router-link class="kk" to="/ParentCascader">下拉级联组件</router-link>
      <router-link class="kk" to="/parentlist">函数组件/插槽</router-link>
      <router-link class="kk" to="/ParentIview">自定义可编辑table</router-link>
      <router-link class="kk" to="/JWT">测试中心</router-link>
      <router-link class="kk" to="/about">About</router-link>

      <div>
        <h2>按钮级别权限设置</h2>
        <el-button v-has="'edit'">编辑</el-button>
        <el-button v-has="'add'">添加</el-button>
      </div>
    </div>

    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
// import {getTest} from './api/index'
export default {
  directives: {
    has: {
      inserted(el, bindings, vnode) {
        let flag = vnode.context.$store.state.btnPermission[bindings['value']];
          !flag && el.parentNode && el.parentNode.removeChild(el);
        // if (el) {
        //   !flag && el.parentNode && el.parentNode.removeChild(el);
        // }
      },
    },
  },
  mounted() {
    // getTest().then(res => {
    //   console.log('跟组件：',res)
    // })
  },
};
</script>

<style>
.kk {
  margin: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
