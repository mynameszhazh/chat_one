<template>
  <div class="chatwindow">
    <div class="title">
      <span>{{ ChatModule.currentName }}</span>
    </div>
    <div class="contList">
      <chatListIiem></chatListIiem>
    </div>
    <chatSendCom></chatSendCom>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ChatModule } from '@/store/modules/chat'

import chatListIiem from '@/components/content/chat/chatListIiem.vue'
import chatSendCom from '@/components/content/chat/chatSendCom.vue'

// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
    chatListIiem,
    chatSendCom
  }
})
export default class extends Vue {
  // 这里有一个很要注意的东西就是这个ts里面的响应式不是很深的那种，一定要注意这种坑，不一样的坑，就算是你自己知道了也是这样
  private ChatModule = ChatModule
}
</script>

<style lang="scss" scoped>
  .chatwindow {
    width: 67%;
    .title {
      font-size: 20px;
      padding: 10px 10px 10px 30px;
      font-weight: bold;
      text-align: left;
      background-color: rgba(0,0,0,0.3);
      span {
        display: inline;
        padding: 5px 15px;
        border: 3px solid rgba(100,100,100,0.4);
        border-radius: 1em;
      }
    }
    .contList {
      width: 100%;
      height: 470px;
    }
  }
</style>
