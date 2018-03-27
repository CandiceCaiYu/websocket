<template>
  <div class="chat-content">
    <div class="chat-content-friend-name">Candice</div>
    <ul class="chat-content-panel">
     <ChatContentFriend />
     <ChatContentMyself />
      <ChatContentFriend />
     <ChatContentMyself />
      <ChatContentFriend />
     <ChatContentMyself />
      <ChatContentFriend />
     <ChatContentMyself />
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
 
</style>
