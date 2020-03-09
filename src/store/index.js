import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: null// 地图对象
  },
  getters: {
    getMap ({ map }) { // 获取地图接口
      return map
    }
  },
  mutations: {
    initMap (state, payload) { // 初始化地图对象及地图接口
      state.map = payload
    }
  },
  actions: {
    initMap ({ commit, state }, params) { // 初始化地图操作
      commit('initMap', params)
    }
  },
  modules: {
  }
})
