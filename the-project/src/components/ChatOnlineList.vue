<template>
  <div class="chat-online-list">
    <ChatInfo />
    <ul class="list">
      <!-- <li class="list-item">
        <img src="../assets/avator.jpeg" alt="">
        <div class="list-item-info">
          <p class="list-item-info-name">蘑菇蘑菇</p>
          <p class="list-item-info-detail">233333</p>
        </div>
      </li> -->

      <li class="list-item" v-for="friend in this.friends" :key=friend.id>
        <img src="../assets/avator.jpeg" alt="">
        <div class="list-item-info">
          <p class="list-item-info-name">{{friend.name}}</p>
          <p class="list-item-info-detail">233333.........</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'
  import ChatInfo from './ChatInfo.vue'
  import { WEBSOCKET } from '../common/connect'
  export default {
    name: 'ChatOnlineList',
    components: { ChatInfo },
    data: function() {
      return {
        msg: '',
        websocket: null,
        allUsers: null,
      }
    },
    mounted: () => {
      this.websocket = WEBSOCKET
    },
    computed: {
      ...mapGetters([
        'friends'
      ]),
    },
    // computed: {
    // allUsers: () => {
    //     return this.onlineUsers.data
    //   }
    // }
    // computed: {
    //   gotUsers: () => {
    //     var self = this;
    //     self.websocket.onmessage = function(message) {
    //       allUsers = JSON.parse(message.data)
    //       self.$store.dispatch('addUser',resultData)
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .list {
    padding: 10px 0;
    height: 100%;
  }
  .list-item {
    padding: 6px;
    height: 40px;
    text-align: left;
    cursor: pointer;
  }
  .list-item:hover {
    background: #ccc;
  }
  .list-item img {
    max-width: 40px;
    border-radius: 50%;
  }
  .list-item-info {
    display: inline-block;
    margin-left: 6px;
  }
  .list-item-info-name {
    margin-bottom: 10px;
    font-size: 13px;
  }
  .list-item-info-detail {
    font-size: 12px;
    color: #818178;
  }
</style>
