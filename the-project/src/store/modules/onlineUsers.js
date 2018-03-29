export default {
  // 初始数据
  state: {
    data: null
  },
  mutations: {
    addUser(state, payload) {
      state.data = payload
    }
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    }
  },
  getters: {
   user: state => {
     return state.data ? state.data.user : ''
   },
   friends: state => {
     return state.data ? state.data.friends : ''
   }
  }
}