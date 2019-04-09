import Vue from 'vue'
import Vuex from 'vuex'
import {getLaunches} from 'api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    launchItems: {},
  },
  actions: {
    async getLaunches({commit}) {
      commit('setLaunchItems', {})

      const launchItems = await getLaunches()

      commit('setLaunchItems', launchItems)
    },
  },
  mutations: {
    setLaunchItems(state, launchItems) {
      state.launchItems = launchItems
    },
  },
  getters: {
    launchItems(state) {
      return state.launchItems
    }
  },
})
