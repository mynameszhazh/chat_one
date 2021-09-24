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
export default class extends Vue {

}
</script>

<style scoped>

</style>
