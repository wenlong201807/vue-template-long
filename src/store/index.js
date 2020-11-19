import Vue from 'vue';
import Vuex from 'vuex';
import {roleAuth} from '../api/index'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hasPermission: false,
  },
  mutations: {},
  actions: {
    async getNewRoute () { // 发起请求，，请求后端数据
      // 需要 把刚才的数据扁平化
      // 获取权限列表 
      const r = await roleAuth()
      console.log('后端权限接口：',r)
    }
  },
});

export default store;
