<template>
   <li class="chat-content-item-friend">
        <img class="chat-content-item-friend-avator" src="../assets/friend.jpg" alt="">
        <div class="chat-content-item-friend-text"><span class="toggle"></span>{{friendMsg}}</div>
      </li>
</template>
<script>
  export default {
    name: 'ChatContentFriend',
    props: ['friendMsg'],
    data: function() {
      return {
        msg: ''
      }
    }
  }
</script>
<style scroped>
 .chat-content-friend-name {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    text-indent: 2em;
    border-bottom: 1px solid #ccc;
  }
  .chat-content-item-friend-avator {
    max-width: 40px;
    border-radius: 50%;
  }
  .chat-content-item-friend-text {
    position: relative;
    display: inline-block;
    max-width: 200px;
    border: 1px solid #339e6f;
    border-radius: 4px;
    padding: 4px;
    text-align: left;
  }
   .chat-content-item-friend-text .toggle {
    position: absolute;
    bottom: 0px;
    left: -12px;
    border: 6px solid transparent;
    border-right: 6px solid #625e5e;
  }
  .chat-content-item-friend{
    text-align: left;
    margin-left: 2em;
  }

</style>
