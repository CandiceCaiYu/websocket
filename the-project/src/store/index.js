import Vue from 'vue';
import Vuex from 'vuex';

import onlineUsers from './modules/onlineUsers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    onlineUsers,
  }
})