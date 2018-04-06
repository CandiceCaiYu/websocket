<template>
  <div class="chat-info" :data = 'this.user'>
    <img class="avator" src="../assets/avator.jpeg" alt="">
    <p class="name">{{this.user.name}}</p>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    name: 'ChatInfo',
    data: function() {
      return {
        msg: ''
      }
    },
    computed: mapGetters([
      'user'
    ])
  }
</script>
<style scoped>
  .chat-info {
    text-align: left;
    background: #00afff;
  }
  .chat-info .avator {
    max-width: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .chat-info .name {
    display: inline-block;
    vertical-align: super;
  }
</style>

