<template>
  <div class="chat-user-list">
    <div class="title">用户列表:</div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in userLists" @click="userChange(item)" :key="index" :class="{active: chatUser.userName === item.userName}">
          <img :src="item.headImg" alt />
          <p>{{ item.userName }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { UserListType } from '@/typesLibrary/chatTypes'

@Component({
  components: {
  }
})
export default class extends Vue {
  @Prop() public userLists!: UserListType[]
  @Prop() public chatUser!: UserListType

  @Emit()
  userChange (item: UserListType): UserListType {
    // ChatModule.changeName(name)
    // this.chatUser = item
    return item
  }
}
</script>

<style lang="scss" scoped>
.chat-user-list {
  list-style: none;
  width: 33%;
  background-color: skyblue;
  height: 100%;
  .title {
    color: gray;
    text-align: left;
    padding: 15px;
  }
  .content {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding-left: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        cursor: pointer;
        transition: all 0.5s;
        img {
          width: 60px;
          height: 60px;
        }
        p {
          margin-left: 10px;
        }
        &:hover {
          background-color: orange;
          color: #42b983;
        }
      }
      .active {
        background-color: cadetblue;
      }
    }
  }
}
</style>
