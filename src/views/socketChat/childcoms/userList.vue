<template>
  <div class="userList">
    <div v-if="!isChoose">
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
          <li v-for="(item, index) in newUserLists" @click="chooseUser(item)" :key="index">
            <img :src="item.headImg" alt/>
            <p>{{ item.userName }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <userChat :chat-user="chatUser" :user-lists="newUserLists" @backuser-list="backuserList"
                @user-change="userChange"></userChat>
    </div>
  </div>
</template>

<script lang="ts">
import userChat from '@/views/socketChat/childcoms/userChat.vue'

import { Component, Prop, Vue } from 'vue-property-decorator'
import socket from '@/socket/chatSocket'
import { UserListType } from '@/typesLibrary/chatTypes'
// import { UserListType } from '@/typesLibrary/chatTypes.d'
@Component({
  components: {
    userChat
  }
})
export default class UserList extends Vue {
  @Prop() public userLists!: UserListType[]
  // 这里出现了一个伏笔
  public currentUser: UserListType = JSON.parse(localStorage.getItem('user'))
  public isChoose = false
  public chatUser: UserListType = {
    userName: '',
    headImg: '',
    isOnline: false
  }

  get newUserLists (): UserListType[] {
    return this.userLists.filter(item => {
      return item.userName !== this.currentUser.userName
    })
  }

  loginout (): void{
    if (this.currentUser.isOnline) {
      this.currentUser.isOnline = false
      socket.emit('loginout', this.currentUser)
      localStorage.removeItem('user')
      this.$router.go(0)
    }
  }

  backuserList (): void {
    this.isChoose = false
  }

  userChange (item: UserListType): void {
    this.chatUser = item
  }

  backList (): void {
    localStorage.removeItem('user')
    this.$router.go(0)
  }

  chooseUser (item: UserListType): void {
    this.isChoose = true
    this.chatUser = item
  }

  created (): void {
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

  .list {
    width: 800px;

    ul {
      list-style: none;

      li {
        height: 50px;
        width: 100%;
        padding: 10px;
        background-color: #42b983;
        margin-top: 5px;
        display: flex;

        img {
          height: 50px;
        }

        p {
          margin-left: 15px;
        }

        &:hover {
          background-color: cornflowerblue;
        }
      }
    }
  }
}
</style>
