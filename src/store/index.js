import Vue from 'vue'
import Vuex from 'vuex'
import todolist from './modules/todolist'
import change from './modules/change'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todolist,
    change
  },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todolist: state.todolist,
          change: state.change
        }
      }
    })
  ]
})
