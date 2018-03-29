<template>
  <div class="wrap">
    <div class="header">
          <h1>登录</h1>
    </div>
    <div class="container">
      <form action="">
        <div class="form-item">
          <label for="">姓名：</label>
          <input type="text" v-model="msg">
        </div>
        <button class="submit-btn" @click="sendMsg"><router-link to="ChatMain">登录</router-link></button>
      </form>
    </div>
  </div>
</template>

<script>
import  { WEBSOCKET }  from '../common/connect'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'yoha',
      websock: null,
    }
  },
  mounted: function() {
    this.websocket = WEBSOCKET;
  },
  methods: {
    sendMsg: function() {
      var self = this;
      var data = {
        loginInfo: {
          name: self.msg
        }
      }
      self.websocket.send(JSON.stringify(data));
      self.websocket.onmessage = function(message) {
        var resultData = JSON.parse(message.data)
        self.$store.dispatch('addUser',resultData)
      }
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrap {
    margin: 150px auto;
    width: 400px;
    height: 230px;
    background: #93c393;
}
.header {
    margin-bottom: 30px;
    padding: 20px 0;
}
.form-item {
  margin-bottom: 20px;
}
.form-item input {
    height: 30px;
    width: 200px;
    border: none;
    border-radius: 2px;
    text-indent: 1em;
}
.submit-btn {
  border: none;
  border-radius: 4px;
  width: 80px;
  height: 30px;
}
</style>
