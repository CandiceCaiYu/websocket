<template>
  <div class="chat-main">
   <div class="left">
     <ChatOnlineList />
   </div>
   <div class="right">
     <!-- <ChatContent /> -->
     <router-view name="chatPanel"></router-view>
   </div>
     <!-- <PromptBox :msg='this.user.name' :show-prompt='true' /> -->
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import ChatOnlineList from './ChatOnlineList'
import ChatContent from './ChatContent'
import PromptBox from './PromptBox'
  export default {
    name: 'ChatMain',
    components: { ChatOnlineList, ChatContent,PromptBox },
    data: function() {
      return {
        message: ''
      }
    },
    computed:{
      ...mapGetters([
      'user'
    ]),
    // info: ()=> {
    //   return this.myself
    //  }
    }
  }
</script>
<style scoped>
  .chat-main {
    width: 776px;
    height: 500px;
    margin: auto;
    background: #94debe;
  }
  .chat-main .left {
    display: inline-block;
    width: 170px;
    height: 100%;
    background: #73968752;
  }
  .chat-main .right {
    display: inline-block;
    width: 600px;
    height: 100%;
    vertical-align: top;
    background: #73968752;
  }
</style>
