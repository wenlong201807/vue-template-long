<template>
  <div >
    <h1>List1 page</h1>
    <template v-for="(item,index) in data">
      <!-- 插槽可以有很多，默认名字为 default -->
      <slot name="default" :item="item" :a="index"></slot>
    </template>
  </div>
</template>

<script>

export default {

  props:{
    data:{
      type:Array,
      default:()=>[] // 引用类型，必须使用函数式返回新的引用
    }
  }
}
</script>
