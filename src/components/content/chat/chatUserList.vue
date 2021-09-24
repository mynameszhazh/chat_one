<template>
  <div class="chat-user-list">
    <div class="title">用户列表:</div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in userListdata" @click="userChange(item.name)" :key="index">
          <img :src="item.url" alt />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ChatModule } from '@/store/modules/chat'

type UserData = {
  url: string;
  name: string;
}

@Component({
  components: {
  }
})
export default class extends Vue {
  userListdata: UserData[] = [{
    url: require('@/assets/1header-logo (1).webp'),
    name: '小明'
  }, {
    url: require('@/assets/1header-logo (2).webp'),
    name: '小红'
  }, {
    url: require('@/assets/1header-logo (3).webp'),
    name: '小鹿'
  }, {
    url: require('@/assets/1header-logo (4).webp'),
    name: '老纸叫捡回'
  }, {
    url: require('@/assets/1header-logo (5).webp'),
    name: '美丽'
  }]

  // private currentName = ''

  created (): void {
    // this.currentName = ChatModule.currentName
  }

  userChange (name: string): void {
    // console.log(name)
    ChatModule.changeName(name)
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
    }
  }
}
</style>
