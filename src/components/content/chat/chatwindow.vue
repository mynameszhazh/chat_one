<template>
  <div class="chatwindow">
    <div class="title">
      用户：{{ currentName.currentNamess }}
    </div>
<!--    <label>-->
<!--      <input type="text" v-model="child">-->
<!--    </label>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { ChatModule } from '@/store/modules/chat'

// 有些东西如果他的项目是不在你的打包项目里面就不会产生很多的错误，就不会发生什么错误了
@Component({
  components: {
  }
})
export default class extends Vue {
  // 这里有一个很要注意的东西就是这个ts里面的响应式不是很深的那种，一定要注意这种坑，不一样的坑，就算是你自己知道了也是这样
  private currentName = ChatModule
  // private child = 'child'

  created (): void {
    // this.currentName = ChatModule.currentNamess
  }

  // 这样的操作是没有任何的问题的
  // @Watch('child', { immediate: true, deep: true })
  // onChildChanged (val: string): void {
  //   console.log(val)
  // }

  add (): void {
    // console.log(ChatModule.currentName)
    this.counter++
  }
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
