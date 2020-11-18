<template>
  <div>
    <el-input style="width:200px" v-model="username"></el-input>
    <el-button @click="loginHandle">登录</el-button>
  </div>
</template>

<script>
// import {getTest} from '../api/index'

export default {
  data() {
    return {
      username: 'admin',
    };
  },
  methods: {
    loginHandle() {
      // console.log('login....');
      this.$store.dispatch('loginAction',this.username).then(() => {
        this.$router.push('/profile');
      });
    },
  },
  // mounted(){
  //   getTest().then(res => {
  //     console.log('登录页：',res)
  //   })
  // }
};
</script>
