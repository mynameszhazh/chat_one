<template>
  <div class="chat">
    <chatwindow></chatwindow>
    <chat-user-list></chat-user-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import chatUserList from '../components/content/chat/chatUserList.vue'
import chatwindow from '../components/content/chat/chatwindow.vue'

// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
    chatUserList,
    chatwindow
  }
})
export default class Chat extends Vue {
}
</script>

<style scoped>
  .chat {
    width: 800px;
    height: 700px;
    border: 1px solid gray;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
  }
</style>
