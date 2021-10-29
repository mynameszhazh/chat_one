<template>
  <div class="chatListIiem">
    <div class="headerImg">
      <img :src="ChatModule.currentHeaderImg" alt="">
    </div>
    <div class="cont">
      <p class="name">{{item.name}}</p>
      <p class="cont-main">{{item.content}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ChatModule } from '@/store/modules/chat'
import { UserInfo } from '@/typesLibrary/chatTypes'

@Component({
  components: {
  }
})
export default class extends Vue {
  @Prop({ default: {} }) private item!: UserInfo
  private ChatModule = ChatModule
}
</script>

<style lang="scss" scoped>
  .chatListIiem {
    display: flex;
    justify-content: flex-start;
    height: 60px;
    max-width: 200px;
    align-items: center;

    .headerImg {
      img {
        width: 40px;
        height: 40px;
      }
    }
    .cont{
      margin-left: 10px;
      padding: 0 10px 0 15px;
          border: 1px solid #ccc;
    border-radius: 30px;
      p {
        margin: 0;
        padding: 0;
      }
      .name {
        color: gray;
        font-size: 12px;
      }
    }
  }
</style>
