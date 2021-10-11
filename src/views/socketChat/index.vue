<template>
  <div class="socketChat">
    <userList></userList>
  </div>
</template>

<script>
import userList from '@/views/socketChat/childcoms/userList'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    userList
  }
})
export default class Home extends Vue {}
</script>

<style scoped>

</style>
