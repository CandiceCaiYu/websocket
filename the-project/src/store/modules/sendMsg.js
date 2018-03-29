export default {
  state: {
    data: []
  },
  mutations: {
    addMsg: (state, payload) => {
      state.data.push(payload)
    }
  },
  actions: {
    addMsg: (context, payload) => {
      context.commit('addMsg',payload)
    }
  }
}