<template>
  <div>userlist</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import socket from '@/socket/chatSocket'
// import { UserListType } from '@/typesLibrary/chatTypes.d'
@Component({
  components: {}
})
export default class UserList extends Vue {
  created () {
    // console.log(socket)
    socket.emit('login', { msg: '请求登录' })
  }
}
</script>

<style scoped>

</style>
