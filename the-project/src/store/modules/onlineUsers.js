export default {
  // 初始数据
  state: {
    users: []
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    }
  },
  getters: {
   myself: state => {
     return state.users.length > 0 ? state.users[0] : state.users
   }
  }
}