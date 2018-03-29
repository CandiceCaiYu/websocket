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
  },
  getters: {
    gotMsg: (state) => {
      let len = state.data.length;
      while(len > 0 ){
        if(state.data[len-1].chat.friendMsg) {
          return state.data[len-1]
        }else {
          len--
        }
      }
    }
  }
}