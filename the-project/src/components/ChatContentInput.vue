<template>
  <div class="chat-content-input">
    <input class="chat-content-input-text" v-model='msg' type="text" placeholder="输入内容.....">
    <button class="chat-content-input-submit" @click="sendMsg">发送</button>
  </div>
</template>
<script>
import { WEBSOCKET } from '../common/connect'

  export default {
    name: 'ChatContentInput',
    props: ['user', 'friend','userId', 'friendId'],
    data: function() {
      return {
        msg: '',
        websocket: null
      }
    },
    mounted: function(){
      this.websocket = WEBSOCKET;
    },
    methods: {
      sendMsg: function() {
        var self = this;
        let data = {
          chat: {
            userName: self.user,
            userId: self.userId,
            friendName: self.friend,
            friendId: self.friendId,
            msg:self.msg
          }
        }
        self.websocket.send(JSON.stringify(data));
        self.websocket.onmessage = function( message) {
          var resultData = JSON.parse(message.data);
          self.$store.dispatch('addMsg',resultData)
        }
        this.msg = ''
      }
    },
  }
</script>
<style scoped>
  .chat-content-input {
    margin-top: 20px;
  }
  .chat-content-input-text {
    height: 40px;
    width: 300px;
    text-indent: 1em;
  }
  .chat-content-input-submit {
    width: 90px;
    height: 42px;
    margin-left: 50px;
  }
</style>

