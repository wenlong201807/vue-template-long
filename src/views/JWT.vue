<template>
  <div class="about">
    <h1>测试中心</h1>
    <MyMenu></MyMenu>
  </div>
</template>

<script>
import MyMenu from '../components/CartComp/Menu'
// import {getTest} from './api/index'
export default {
  components:{MyMenu},
  mounted(){
    // getTest().then(res => {
    //   console.log('跟组件：',res)
    // })
  }
}
</script>
