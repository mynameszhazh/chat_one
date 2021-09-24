<template>
  <div class="chat-user-list">
    <div class="title">用户列表</div>
    <div class="content">
      <ul>
        <li>
          <img src="" alt="">
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
  }
})
export default class extends Vue {

}
</script>

<style scoped>

</style>
