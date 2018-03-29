<template>
  <div class="chat-online-list">
    <ChatInfo />
    <ul class="list">
      <li class="list-item" v-for="friend in this.friends" :key=friend.id v-if="friend.name != user.name">
        <router-link class="list-item-link" :to="{
          name:'ChatContent' , 
          params:{
            userName:user.name, 
            userId:user.id,
            friendName: friend.name,
            friendId: friend.id
            }}">
          <img src="../assets/avator.jpeg" alt="">
          <div class="list-item-info">
            <p class="list-item-info-name">{{friend.name}}</p>
            <p class="list-item-info-detail">233333.........</p>
          </div>
        </router-link>
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
        'friends',
        'user',
      ]),
    },
  }
</script>

<style scoped>
  .list {
    height: 100%;
  }
  .list-item {
    margin-bottom: 4px;
    height: auto;
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
  .list-item-link {
    display: inline-block;
    padding: 8px 6px;
    height: 100%;
    width: 100%;
    
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
   .router-link-active {
    background: #ccc;
  }
</style>
