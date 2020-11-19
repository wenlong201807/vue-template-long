<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">{{ result }}</div>
    <div v-if="isVisibile">
      <!-- <div class="content" v-if="isVisibile"> -->
      <CascaderItem
        :options="options"
        :value="value"
        :level="0"
        @change="change"
      ></CascaderItem>
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
import CascaderItem from './CascaderItem.vue';
import cloneDeep from 'lodash/cloneDeep';
export default {
  components: {
    CascaderItem,
  },
  props: {
    lazyload: {
      type: Function,
    },
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
  computed: {
    result() {
      return this.value.map((item) => item.label).join('/');
    },
  },
  methods: {
    handle(id, children) {
      // 数据重组。但是又不能影响原来的数据源
      console.log('所有数据源头：',this.options); // 数据层级嵌套，如何指定找出某一项
      console.log('当前需要使用的数据：',id, children); // 子数组，如何正确插入
      /**
       * 树结构的遍历方式 深度优先，或者 层序遍历
       * 目标：去树中如何找到当前id 这一项
       * // 思路：使用栈结构存储数据
       * */

      let cloneOptions = cloneDeep(this.options);
      let stack = [...cloneOptions];
      let index = 0;
      let current;
      while ((current = stack[index++])) { // 广度遍历 
        if (current.id !== id) {
          if (current.children) {
            stack = stack.concat(current.children);
          }
        } else {
          break;
        }
      }

      // console.log('目标数据整合：',current);
      if(current){ // 动态的数据加载好后，传递给父亲
        current.children = children // 动态的添加儿子节点
        this.$emit('update:options',cloneOptions)
      }
    },
    change(value) {
      // 先获取点击的使哪一个，再调用用户的 lazyload 方法
      // console.log(value);
      let lastItem = value[value.length - 1];
      let id = lastItem.id;
      if (this.lazyload) {
        // 需要给  当前id 的这一项 添加一个children 属性
        this.lazyload(id, (children) => this.handle(id, children));
      }
      this.$emit('input', value); // 再往父级传递出去，共用户使用
    },

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
