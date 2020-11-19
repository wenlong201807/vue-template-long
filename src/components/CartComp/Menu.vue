<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item index="1-1">选项1-1</el-menu-item>
        <el-menu-item index="1-2">选项1-2</el-menu-item>
        <el-menu-item index="1-3">选项1-3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项2-2</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >导航3</el-menu-item>
      <el-menu-item index="4" >导航4</el-menu-item>
      <el-menu-item index="5" disabled>导航5</el-menu-item>
     
    </el-menu>
  
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
