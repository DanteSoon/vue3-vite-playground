import { createStore } from 'vuex'
import testModule from './test-module'
import demoModule from './demo-module'

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
    demoModule,
  },
})
export default store
