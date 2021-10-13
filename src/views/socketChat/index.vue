<template>
  <div class="socketChat">
    <chooseUser v-if="isUserOnline" @select-user="selectUser" :user-lists="userLists"></chooseUser>
    <userList v-else></userList>
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
      headImg: ''
    }
  ]

  currentUser: string | null = localStorage.getItem('user')

  getUserList (): void {
    axios.get('http://localhost:3000/users/list').then(res => {
      console.log(res)
      this.userLists = res.data
    })
  }

  @Watch('currentUser')
  currentUserChange (val: string): void {
    // console.log(val)
  }

  created (): void {
    this.getUserList()
    // console.log(localStorage.getItem('user'))
  }

  selectUser (name) {
    // console.log(111)
    // console.log(name)
    this.currentUser = name
  }

  get isUserOnline (): boolean {
    return this.currentUser === null
  }
}
</script>

<style scoped>

</style>
