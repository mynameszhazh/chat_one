<template>
  <div class="chatListIiem">
    <div class="headerImg">
      <img src="" alt="">
    </div>
    <div class="cont">
      <p class="name"></p>
      <p class="cont-main"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { ChatModule } from '@/store/modules/chat'

@Component({
  components: {
  }
})
export default class extends Vue {
  // private currentName = ChatModule
}
</script>

<style lang="scss" scoped>
  .chatwindow {
    width: 67%;
    padding: 10px;
    .title {
      font-size: 23px;
      font-weight: bold;
      padding-left: 30px;
      text-align: left;
    }
  }
</style>
