import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ChatMain from '@/components/ChatMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ChatMain',
      name: 'ChatMain',
      component: ChatMain
    }
  ]
})
