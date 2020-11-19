import Vue from 'vue';
import Vuex from 'vuex';
import { roleAuth } from '../api/index';
import { authRoutes } from '../router/index';

Vue.use(Vuex);

// 扁平数组数据变成多层级数据
const getTreeList = (menuList) => {
  let menu = []; // 用来渲染菜单的
  let routerMap = {};
  let auths = []; // 获取权限列表

  menuList.forEach((m) => {
    auths.push(m.auth);
    m.children = []; // 增加一个孩子列表
    routerMap[m.id] = m;
    if (m.pid == -1) {
      menu.push(m);
    } else {
      if (routerMap[m.pid]) {
        // 找到对应的父亲，将值  塞进去
        routerMap[m.pid].children.push(m);
      }
    }
  });

  // console.log('多层级数据：', menu, auths)
  return { menu, auths };
};

const formatList = (authRoutes, auths) => {
  return authRoutes.filter((route) => {
    if (auths.includes(route.name)) {
      if (route.children) {       
        route.children = formatList(route.children, auths);
      }
      return true;
    }
  });
};

const store = new Vuex.Store({
  state: {
    hasPermission: false, // 路由级权限
    menuList: [],
    btnPermission: { // 按钮级权限
      'edit': true,
      'add':false,
    }
  },
  mutations: {
    setMenuListMutation (state, menu) {
      state.menuList = menu;
    },
    setHasPermissionMutation(state) {
      state.hasPermission = true
    },
  },
  actions: {
    async getNewRouteAction({ commit }) {
      // 发起请求，，请求后端数据
      // 需要 把刚才的数据扁平化
      // 获取权限列表
      let { menuList } = await roleAuth();
      // console.log('后端权限接口：', menuList)
      let { menu, auths } = getTreeList(menuList);
      // console.log('格式化目标数据：', menu, auths)

      commit('setMenuListMutation', menu);
      // console.log('依据后端返回的权限，选择性添加路由表内容：',auths,authRoutes)
      let needRoutes = formatList(authRoutes, auths);
      // console.log('获取格式化之后的新权限路由表：', needRoutes);

      commit('setHasPermissionMutation') // 更新权限判断条件
      return needRoutes
    },
  },
});

export default store;
