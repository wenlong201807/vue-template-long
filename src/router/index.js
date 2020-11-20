import Vue from 'vue';
// import VueRouter from './vue-router';
import VueRouter from 'vue-router';

// 1.应用插件 // use 方法会调用install方法
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '*',
    component: {
      render: (h) => h('h1', {}, 'Not Found'),
    },
  },
];

// 2.创建实例
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
