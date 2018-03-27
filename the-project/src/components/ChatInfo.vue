<template>
  <div class="chat-info">
    <img class="avator" src="../assets/avator.jpeg" alt="">
    <p class="name">{{this.myself.name}}</p>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ChatInfo',
    data: function() {
      return {
        msg: ''
      }
    },
    computed: mapGetters([
      'myself'
    ])
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

