<template>
  <div class="chat-main">
   <div class="left">
     <ChatOnlineList />
   </div>
   <div class="right">
     <ChatContent />
   </div>
  </div>
</template>
<script>
import ChatOnlineList from './ChatOnlineList'
import ChatContent from './ChatContent'
  export default {
    name: 'ChatMain',
    components: { ChatOnlineList, ChatContent },
    data: function() {
      return {
        msg: ''
      }
    }
  }
</script>
<style scoped>
  .chat-main {
    width: 900px;
    height: 500px;
    margin: auto;
    background: #94debe;
  }
  .chat-main .left {
    display: inline-block;
    width: 200px;
    height: 100%;
    background: #73968752;
  }
  .chat-main .right {
    display: inline-block;
    width: 690px;
    height: 100%;
    vertical-align: top;
    background: #73968752;
  }
</style>
