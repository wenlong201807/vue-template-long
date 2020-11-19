import Vue from 'vue';
import App from './App.vue';
// import router from './myrouter' // 自定义实现路由
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
