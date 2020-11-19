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


    </div>

    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
// import {getTest} from './api/index'
export default {
  mounted(){
    // getTest().then(res => {
    //   console.log('跟组件：',res)
    // })
  }
}
</script>


<style>
.kk{
  margin: 20px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
