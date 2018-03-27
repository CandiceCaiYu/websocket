<template>
<transition name="fade">
  <div class="prompt"  v-show="show">
    <div class="title">提示</div>
    <div class="text">{{msg}} 上线啦</div>
    <div class="btn">
      <button class="yes-btn" @click="showBox">确定</button>
      <slot></slot>
    </div>
  </div>
  </transition>
</template>
<script scoped>
  export default {
    name: 'PromptBox',
    props: ['msg','showPrompt'],
    data: function() {
      return {
        show: this.$props.showPrompt
      }
    },
    methods: {
      showBox: function() {
        var d = this.show;
        this.show  = !d
      }
    }
  }
</script>
<style scoped> 
  .prompt {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 4px;
    width: 300px;
    height: 150px;
    background: #bad0c3;
  }
  .prompt .title {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #95957a;
  }
  .prompt .text {
    height: 70px;
    line-height: 70px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  .prompt .yes-btn {
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background: #00afff;
    color: #fff;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
</style>

