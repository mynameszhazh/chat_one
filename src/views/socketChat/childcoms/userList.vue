<template>
  <div class="userList">
    <div class="nav">
      <div class="headerimg" :class="{filter: !currentUser.isOnline}">
        <img :src="currentUser.headImg" alt="">
      </div>
      <div class="msg">{{ currentUser.userName }}</div>
      <div>
        <button v-if="currentUser.isOnline" @click="loginout">退出登录</button>
        <button v-else @click="backList">返回列表页</button>
      </div>
    </div>
    <div class="list">
      <ul>
        <li>{{userLists}}</li>
      </ul>
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
   @Prop() private userLists!: UserListType[]
  // 这里出现了一个伏笔
  public currentUser!: UserListType = JSON.parse(localStorage.getItem('user'))

  loginout () {
    if (this.currentUser.isOnline) {
      this.currentUser.isOnline = false
      socket.emit('loginout', this.currentUser)
      localStorage.removeItem('user')
      this.$router.go(0)
    }
  }

  backList () {
    localStorage.removeItem('user')
    this.$router.go(0)
  }

  created () {
    socket.emit('login', this.currentUser)
    socket.on('login', data => {
      if (data.state === 'ok') {
        console.log('登录成功')
        this.currentUser.isOnline = true
      }
    })
    socket.on('loginout', data => {
      console.log(data.content)
      this.currentUser.isOnline = false
      socket.emit('loginout', { msg: '下线了' })
    })
  }
}
</script>

<style lang="scss" scoped>
.userList {
  width: 800px;
  height: 1300px;
  margin: 0 auto;

  .nav {
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

    .filter {
      filter: grayscale(1);
    }
  }
}
</style>
