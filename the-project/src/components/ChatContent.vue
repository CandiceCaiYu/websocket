<template>
  <div class="chat-content">
    <div class="chat-content-friend-name">{{$route.params.friendName}}</div>
    <ul class="chat-content-panel" v-if="this.sendMsg.data.length > 0">
      <template v-for="item in this.sendMsg.data">
        <ChatContentFriend :key="item.chat.id" v-if="item.chat.friendMsg" :friendMsg="item.chat.friendMsg" />
        <ChatContentMyself :key="item.chat.id" v-if="item.chat.msg" :msg="item.chat.msg"/>
      </template>
    </ul>
    <ChatContentInput 
      :user="$route.params.userName" 
      :friend="$route.params.friendName"
      :userId="$route.params.userId"
      :friendId="$route.params.friendId"
       />
  </div>
</template>
<script>
  import ChatContentFriend from './ChatContentFriend'
  import ChatContentMyself from './ChatContentMyself'
  import ChatContentInput from './ChatContentInput'
  import { mapState } from 'vuex'
  export default {
    name: 'ChatContent',
    components: { ChatContentMyself, ChatContentFriend, ChatContentInput },
    data: function() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapState([
        'sendMsg'
      ])
    }
  }
</script>
<style scoped>
  .chat-content-panel {
    margin-top: 20px;
    height: 360px;
    overflow: auto;
  }
  .chat-content-friend-name {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
 
</style>
