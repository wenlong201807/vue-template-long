<template>
  <div id="app">
    <div id="nav">
      <router-link class="kk" to="/">首页</router-link>
      <router-link class="kk" to="/Login">登录</router-link>
      <router-link class="kk" to="/Profile">个人中心</router-link>

      <router-link class="kk" to="/ParentCascader">ParentCascader</router-link>
      <router-link class="kk" to="/parentlist">parentlist</router-link>
      <router-link class="kk" to="/ParentIview">ParentIview</router-link>
      <router-link class="kk" to="/JWT">JWT</router-link>
      <router-link class="kk" to="/about">About</router-link>
      <router-link class="kk" to="/about">About</router-link>

    </div>

    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
// import {getTest} from './api/index'
// export default {
//   mounted(){
//     getTest().then(res => {
//       console.log('跟组件：',res)
//     })
//   }
// }
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
