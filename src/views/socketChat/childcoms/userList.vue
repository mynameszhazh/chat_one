<template>
  <div class="userList">
    <div class="nav">
      <div class="headerimg">
        <img :src="currentUser.headImg" alt="">
      </div>
      <div class="msg">{{currentUser.userName}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import socket from '@/socket/chatSocket'
import { UserListType } from '@/typesLibrary/chatTypes'
// import { UserListType } from '@/typesLibrary/chatTypes.d'
@Component({
  components: {}
})
export default class UserList extends Vue {
  // 这里出现了一个伏笔
 public currentUser!: UserListType = JSON.parse(localStorage.getItem('user'))

 created () {
   socket.emit('login', { msg: '请求登录' })
 }
}
</script>

<style lang="scss" scoped>
  .userList {
    width: 800px;
    height: 1300px;
    margin: 0 auto;
    .nav  {
      width: 100%;
      display: flex;
      background-color: darkorange;
      padding: 10px 20px;
      .headerimg {
        width: 50px;
        height: 50px;
        img {
          width: 100%;
        }
      }
      .msg {
        flex: 1;
        display: flex;
        padding-left: 25px;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
</style>
