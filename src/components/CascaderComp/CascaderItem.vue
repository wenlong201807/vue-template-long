<template>
  <div class="content">
    <!-- 先显示第一层 -->
    <div class="content-left">
      {{ level }}
      <div v-for="(item, index) in options" :key="index">
        <div class="label" @click="select(item)">{{ item.label }}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <!-- 递归组件的核心所在 -->
      <CascaderItem
        :options="lists"
        :level="level + 1"
        :value="value"
        @change="change"
      ></CascaderItem>
      <!-- <div v-for="(item, index) in lists" :key="index">
        <div class="label">{{ item.label }}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
// Cascader => CascaderItem => CascaderItem => CascaderItem
import cloneDeep from 'lodash/cloneDeep';
export default {
  name: 'CascaderItem', // 递归组件，调用自己，通过这个名字查找
  props: {
    level: Number,
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  computed: { // 有缓存， computed = watch + 缓存 
    lists() { 
      return this.value[this.level] && this.value[this.level].children
      // 被缓存了，无法更新
      // return this.currentSelected && this.currentSelected.children;
    },
  },
  methods: {
    change(item) {
      this.$emit('change', item);
    },
    select(item) {
      this.currentSelected = item; // 把当前左边选中的这一项存储起来
      // 每次选择的时候，需要跟父亲说，我修改了，父亲节点需要更新数据
      // 具体如何做？
      // 需要把数据拷贝一份，把数据改好提交给父亲
      let cloneValue = cloneDeep(this.value); // 把父组件传递的属性拷贝
      cloneValue[this.level] = item;
      cloneValue.splice(this.level+1) // 删除下一层的数据（包括子节点内容 ），保证每次点击可以获取下一层的最新值
      this.$emit('change', cloneValue);
    },
  },
  data() {
    return {
      currentSelected: null,
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  .content-left {
    border:1px solid #ccc;
    min-height: 150px;
    background: pink;
  }
  .label{
    width: 80px;
    padding-left: 5px;
    &:hover{
      background: #999;
      cursor: pointer;
    }
  }
}
</style>
