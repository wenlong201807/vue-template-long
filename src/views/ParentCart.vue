<template>
  <div class="mycart">
    <h1 class="add">购物车中心</h1>
    <!-- <MyMenu></MyMenu> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import MyMenu from '../components/CartComp/Menu'
export default {
  // components:{MyMenu},
  data() {
    return {
      aa: 1,
    };
  },
};
</script>
