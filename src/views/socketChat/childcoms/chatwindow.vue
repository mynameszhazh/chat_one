<template>
  <div class="chatwindow">
    <div class="title">
      <span>{{ chatUser.userName }}</span>
      <span @click="backuserList">返回登录</span>
    </div>
    <div class="contList">
<!--      <div  v-for="(item, index) in currentChatRecord"  :key="index">-->
<!--        <chatListIiem :item="item"></chatListIiem>-->
<!--      </div>-->
    </div>
    <chatSendCom></chatSendCom>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
// import { ChatModule } from '@/store/modules/chat'

import chatListIiem from './chatListIiem.vue'
import chatSendCom from './chatSendCom.vue'
import { UserListType } from '@/typesLibrary/chatTypes'

// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
    chatListIiem,
    chatSendCom
  }
})
export default class extends Vue {
  @Prop() public chatUser!: UserListType

  created ():void {
    console.log(this.chatUser)
  }

  @Emit()
  backuserList ():void {
    console.log('返回登录用户列表页')
  }
}
</script>

<style lang="scss" scoped>
  .chatwindow {
    width: 67%;
    .title {
      font-size: 20px;
      padding: 0 10px 0 30px;
      font-weight: bold;
      //text-align: left;
      display: flex;
      justify-content: space-between;
      background-color: rgba(0,0,0,0.3);
      span {
      box-sizing: border-box;
        display: inline;
        padding: 5px 15px;
        border: 3px solid rgba(100,100,100,0.4);
        border-radius: 1em;
      }
    }
    .contList {
      width: 100%;
      height: 470px;
      overflow-y: scroll;
      padding: 30px 10px 10px 10px;
      box-sizing: border-box;
    }
  }
</style>
