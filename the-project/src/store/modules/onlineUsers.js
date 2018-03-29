export default {
  // 初始数据
  state: {
    data: {
      user: {},
      friends: []
    }
  },
  mutations: {
    addUser(state, payload) {
      if(payload.friends) {
        state.data.friends = payload.friends
      }
      if(payload.user) {
        state.data.user = payload.user
      }
    }
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    }
  },
  getters: {
   user: state => {
     return state.data.user ? state.data.user : ''
   },
   friends: state => {
     return state.data.friends ? state.data.friends : ''
   }
  }
}