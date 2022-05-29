import { createStore } from 'vuex'
import testModule from './test-module'

const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    doIncrement(context) {
      context.commit('increment', 'test')
    },
  },
  modules: {
    testModule,
  },
})
export default store
