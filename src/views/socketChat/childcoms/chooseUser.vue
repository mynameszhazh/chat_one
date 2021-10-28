<template>
  <div class="chatUserList">
    <p class="title">请选择你要进行聊天的角色</p>
    <div class="user-item" v-for="(item, index) in userLists" @click="selectUser(item)" :key="index">
      <img :src="item.headImg" alt="">
      <p>{{ item.userName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { UserListType } from '@/typesLibrary/chatTypes.d'

@Component({
  components: {}
})
export default class ChooseUser extends Vue {
  @Prop({
    default: [
      {
        userName: '',
        age: 0,
        headImg: ''
      }
    ]
  }) private userLists!: UserListType[]

  @Emit()
  selectUser (item: UserListType): void {
    const temp = JSON.stringify(item)
    localStorage.setItem('user', temp)
  }
}
</script>

<style lang="scss" scoped>
  .chatUserList {
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .title {
      width: 100%;
      text-align: left;
    }
    .user-item{
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }
    }
  }
</style>
