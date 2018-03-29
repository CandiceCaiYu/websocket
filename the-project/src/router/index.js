import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ChatMain from '@/components/ChatMain'
import ChatContent from '@/components/ChatContent'

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
      component: ChatMain,
      children: [
        {
          path: 'ChatContent/:friendName',
          name: 'ChatContent',
          components: {
            chatPanel: ChatContent
          },

        }
      ]
    }
  ]
})
