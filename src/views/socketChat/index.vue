<template>
  <div class="socketChat">
    <chooseUser v-if="isUserOnline" @select-user="selectUser" :user-lists="userLists"></chooseUser>
    <userList v-else :current-user="currentUser" ></userList>
  </div>
</template>

<script lang="ts">
import chooseUser from '@/views/socketChat/childcoms/chooseUser.vue'
import userList from '@/views/socketChat/childcoms/userList.vue'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UserListType } from '@/typesLibrary/chatTypes'

import axios from 'axios'

@Component({
  components: {
    chooseUser,
    userList
  }
})
export default class Home extends Vue {
  userLists: UserListType[] = [
    {
      userName: '',
      age: 0,
      headImg: '',
      isOnline: false
    }
  ]

  currentUser: UserListType = {
    userName: '',
    age: 0,
    headImg: '',
    isOnline: false
  }

  currentUserName: string | null = localStorage.getItem('user')

  getUserList (): void {
    axios.get('http://localhost:3001/users/list').then(res => {
      console.log(res)
      this.userLists = res.data
    })
  }

  @Watch('currentUser.userName')
  currentUserChange (val: string): void {
    // console.log(val)
  }

  created (): void {
    this.getUserList()
    // console.log(localStorage.getItem('user'))
  }

  selectUser (item: UserListType) {
    // console.log(111)
    this.currentUser = item
    this.currentUserName = item.userName
  }

  get isUserOnline (): boolean {
    // console.log(localStorage.getItem('user') === null)
    return this.currentUserName === null
  }
}
</script>

<style scoped>

</style>
