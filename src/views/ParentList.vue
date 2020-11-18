<template>
  <div >
    <h1>ParentList page</h1>

    <!-- 给自定义组件传入render函数，类似  iviewUI 库中的  tree 之类 -->
    <List :data="data" :render="render"></List>

    <!-- element ui scope-slot  作用域插槽 ** 本质还是回调函数 -->
    <!-- 组件封装 -->
    <List1 :data="data">
      <!-- 普通插槽是在父组件中执行 -->
      <!-- 子组件中执行的是  作用域插槽 -->
      <template v-slot:default="{item,a}">
        <span>{{item}}---{{a}}</span>
        <!-- <li>{{item}}---{{a}}</li> 此处可自定义选择使用-->
      </template>
      <li></li>
    </List1>
  </div>
</template>

<script>
import List from '../components/ListComp/List.vue'
import List1 from '../components/ListComp/List1.vue'
export default {
  components:{
    List,
    List1
  },
  data(){
    return {
      data:['文','龙','朱']
    }
  },
  methods:{
    render(h,data) { // data 是函数式组件在list组件中每次循环出来的结果
      return <span>{data}</span>
    },
  }
}
</script>
