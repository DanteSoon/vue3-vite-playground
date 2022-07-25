const demoModule = {
  namespaced: true,
  state: () => ({
    appStartTimer: null,
  }),
  mutations: {
    // increment(state) {
    //   // 这里的 `state` 对象是模块的局部状态
    //   console.log(2222)
    //   state.count++
    // },
    newTimer(state) {
      state.appStartTimer = new Date()
    },
  },

  getters: {
    // doubleCount(state) {
    //   return state.count * 2
    // },
    getAppStartTimestamp(state) {
      return state.appStartTimer.getTime()
    },
  },
  actions: {
    appStart(state) {
      state.commit('newTimer')
    },
  },
}
export default demoModule
