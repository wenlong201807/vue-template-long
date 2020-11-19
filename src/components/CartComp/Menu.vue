<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="(item, index) in $store.state.menuList">
        <MenuItem :item="item" :key="index"></MenuItem>
        <!-- <el-submenu index="1" :key="index" v-if="item.children.length">
          <template slot="title">导航一</template>

          <el-menu-item index="1-1">选项1-1</el-menu-item>
          <el-menu-item index="1-2">选项1-2</el-menu-item>

          <el-submenu index="2-4">
            <template slot="title">选项2-2</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="3" :key="index" v-else>导航二</el-menu-item> -->
      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem';
export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  mounted() {
    console.log('购物车权限菜单：', this.$store.state.menuList);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
