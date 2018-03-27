<template>
  <div class="chat-content-input">
    <input class="chat-content-input-text" type="text" placeholder="输入内容.....">
    <button class="chat-content-input-submit">发送</button>
  </div>
</template>
<script>
  export default {
    name: 'ChatContentInput',
    data: function() {
      return {
        msg: ''
      }
    }
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

