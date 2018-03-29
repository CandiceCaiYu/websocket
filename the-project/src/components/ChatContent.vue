<template>
  <div class="chat-content">
    <div class="chat-content-friend-name">{{$route.params.userName}}</div>
    <ul class="chat-content-panel">
    
    </ul>
    <ChatContentInput />
  </div>
</template>
<script>
  import ChatContentFriend from './ChatContentFriend'
  import ChatContentMyself from './ChatContentMyself'
  import ChatContentInput from './ChatContentInput'
  export default {
    name: 'ChatContent',
    components: { ChatContentMyself, ChatContentFriend, ChatContentInput },
    data: function() {
      return {
        msg: ''
      }
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
