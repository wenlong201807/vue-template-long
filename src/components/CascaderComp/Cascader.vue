<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">{{result}}</div>
    <div v-if="isVisibile">
    <!-- <div class="content" v-if="isVisibile"> -->
      <CascaderItem :options="options" :value="value" :level="0" @change="change"></CascaderItem>
      <!-- 先显示第一层 -->
      <!-- <div class="content-left">
        <div v-for="(item,index) in options" :key="index">
          <div class="label" @click="select(item)"> {{item.label}}</div>
        </div>
      </div>
      <div class="content-right">
        <div v-for="(item,index) in lists" :key="index">
          <div class="label" > {{item.label}}</div>
        </div>
      </div> -->
    </div>
    <div></div>
  </div>
</template>

<script>
// 可以在全局上挂个事件，当点击的时候，校验一下，点击的是否是 cascader 中的内容
// 判断当前点击的是否在某个元素上

// 如果你希望对某个元素拥有一系列的操作，你可以封装一个指令，自定义指令

import util from '../directives/clickOutside.js';
import CascaderItem from './CascaderItem.vue'
export default {
  components:{
    CascaderItem
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  directives: {
    clickOutside: util.clickOutside, // 抽离方法
    // 指令有自己的生命周期
    // bind  update inserted unbind  componentUpdate
    // clickOutside: {
    //   inserted(el, bindings, vnode) {
    //     // el 真实的dom节点
    //     console.log(el, bindings, vnode);
    //     document.addEventListener('click', (e) => {
    //       if (e.target === el || el.contains(e.target)) {
    //         return;
    //       }
    //       console.log('xxxx');
    //       bindings.value(); // close 事件  v-click-outside="close" 这里对应的
    //     });
    //   },
    // },
  },
  computed:{
result(){
  return this.value.map(item => item.label).join('/')
}
  },
  methods: {
    change(value){
this.$emit('input',value) // 再往父级传递出去，共用户使用
    },
    // select(item){
    //   console.log(item)
    //   this.currentSelected = item // 把当前左边选中的这一项存储起来
    // },
    close() {
      this.isVisibile = false;
    },
    toggle() {
      this.isVisibile = !this.isVisibile;
    },
  },
  data() {
    return {
      isVisibile: false,
      // currentSelected:null
    };
  },
};
</script>

<style scoped lang="scss">
.cascader {
  display: inline-block;
  // width: 500px;
  // height: 300px;
  // background: pink;
  }
  .title {
    width: 260px;
    height: 50px;
    line-height: 50px;
    // background: yellowgreen;
    border: 1px solid #ccc;
  }
  .content {
    display: flex;
  }

</style>
