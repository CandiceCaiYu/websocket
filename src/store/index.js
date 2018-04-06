import Vue from 'vue';
import Vuex from 'vuex';

import onlineUsers from './modules/onlineUsers';
import sendMsg from './modules/sendMsg'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    onlineUsers,
    sendMsg
  }
})