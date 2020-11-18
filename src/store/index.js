import Vue from 'vue'
import Vuex from 'vuex'
import {login, validate} from '../api/index'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username:''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setUsername (state, username) {
      state.username = username
    }
  },
  actions: {
    async validateAction ({commit}) {
      const r = await validate()
      // console.log('校验是否登录的：', r)
      if (r.code === 1) {
        return false
      }

      commit('setUsername', r.username)
      localStorage.setItem('token', r.token)
      return true
    },
    async loginAction ({commit},username) {
      let r = await login(username)
      // console.log(r, commit)
      if (r.code === 1) {
        return Promise.reject(r)
      }
      localStorage.setItem('token', r.token)
      commit('setUsername', r.username)
      
    }
  }
})
 
export default store