<template>
  <div class="chat-info">
    <img class="avator" src="../assets/avator.jpeg" alt="">
    <p class="name">路边的蘑菇</p>
  </div>
</template>
<script>
  export default {
    name: 'ChatInfo',
    data: function() {
      return {
        msg: ''
      }
    }
  }
</script>
<style scoped>
  .chat-info {
    background: #00afff;
  }
  .chat-info .avator {
    max-width: 70px;
    border-radius: 50%;
  }
  .chat-info .name {
    display: inline-block;
    vertical-align: super;
  }
</style>

