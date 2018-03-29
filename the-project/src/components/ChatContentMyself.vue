<template>
   <li class="chat-content-item-myself">
        <div class="chat-content-item-myself-text"><span class="toggle"></span> {{msg}}</div>
        <img class="chat-content-item-myself-avator" src="../assets/avator.jpeg" alt="">
    </li>
</template>
<script>
  export default {
    name: 'ChatContentMyself',
    props: ['msg'],
  
  }
</script>
<style scoped>

  .chat-content-item-myself-avator {
    max-width: 40px;
    border-radius: 50%;
  }

  .chat-content-item-myself-text {
    position: relative;
    display: inline-block;
    max-width: 200px;
    border: 1px solid #339e6f;
    border-radius: 4px;
    padding: 4px;
    text-align: left;
  }

  .chat-content-item-myself-text .toggle {
    position: absolute;
    bottom: 0;
    right: -12px;
    border: 6px solid transparent;
    border-left: 6px solid #625e5e;
  }

  .chat-content-item-myself{
    text-align: right;
    margin-right: 2em;
  }
</style>
