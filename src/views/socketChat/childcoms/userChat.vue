<template>
  <div class="chat">
    <chatwindow :chat-user="chatUser" @backuser-list="backuserList"></chatwindow>
    <chat-user-list :user-lists="userLists" :chat-user="chatUser" @user-change="userChange"></chat-user-list>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import chatUserList from './chatUserList.vue'
import chatwindow from './chatwindow.vue'
import { UserListType } from '@/typesLibrary/chatTypes'

// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
    chatUserList,
    chatwindow
  }
})
export default class userChat extends Vue {
  @Prop() public userLists!: UserListType[]
  @Prop() public chatUser!: UserListType

  @Emit()
  backuserList (): void {
    console.log('1')
  }

  @Emit()
  userChange (item: UserListType): UserListType {
    return item
  }
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
