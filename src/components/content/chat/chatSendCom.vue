<template>
  <div class="chatSendCom">
    <div class="util"> 工具</div>
    <label>
      <textarea name="" id="" v-model="content"  @keydown.enter='handleSend'></textarea>
    </label>
    <div class="send">
      <button @click="handleSend">发送</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ChatModule } from '@/store/modules/chat'
// 这里我真的不知道是个什么东西，但是就是这样不出来，所有我的
import { UserInfo } from '@/typesLibrary/chatTypes'

// type UserInfo = {
// }
// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
  }
})
export default class extends Vue {
  public content = ''

  handleSend (e: Event):void {
    e.preventDefault()
    if (this.content) {
      const obj: UserInfo = {
        // 这里不是一个动态的完全是因为我没有一个合格的登录状态
        name: ChatModule.currentName,
        content: this.content
      }
      ChatModule.addChatReacord(obj)
      this.content = ''
    }
    // console.log(ChatModule.chatRecord.get(ChatModule.currentName))
  }
}
</script>

<style lang="scss" scoped>
  .chatSendCom {
    .util {
      height: 30px;
      background-color: gray;
      padding: 0 30px;
      text-align: left;
    }
    label{
      margin: 0;
      padding: 0;
    }
    textarea {
      height: 110px;
      width: 100%;
      font-size: 20px;
      padding: 10px;
      outline: skyblue;
      border-color: antiquewhite;
      box-sizing: border-box;
      resize: none;
    }
    .send {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      line-height: 30px;
      padding: 0 30px;
      text-align: right;
    }
  }
</style>
