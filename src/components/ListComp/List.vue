<template>
  <div >
    <h1>List page</h1>
    <template v-for="(item,index) in data">
      <li :key="index" v-if="!render">{{item}}</li>
      <ListItem :key="'a'+index" v-else :render="render" :item="item"></ListItem>
    </template>
  </div>
</template>

<script>
import ListItem from './ListItem.js'
export default {
  components:{
    ListItem
  },
  props:{
    render: {
      type:Function
    },
    data:{
      type:Array,
      default:()=>[] // 引用类型，必须使用函数式返回新的引用
    }
  }
}
</script>
