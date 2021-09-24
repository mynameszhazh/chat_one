// user.ts
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { UserData, UserInfo } from '@/typesLibrary/chatTypes'
// import { UserInfo } from '../../../typesLibrary/chatTypes'

import store from '@/store'

export interface currentUserState {
    currentName: string,
    currentHeaderImg: string
}

// 这是一个单人的记录使用的玩意
// type chatRecordType = {
// }

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements currentUserState {
    public currentName = '小明'
    public currentHeaderImg = ''
    public chatRecord = new Map()
    @Mutation
    changeName (payload: UserData): void {
      // console.log(payload)
      this.currentName = payload.name
      this.currentHeaderImg = payload.url
    }

    @Mutation
    addChatReacord (payload: UserInfo): void {
      // console.log(this.chatRecord)
      const arr: any[] = []
      if (!this.chatRecord.has(payload.name)) {
        arr.push(payload.content)
        this.chatRecord.set(this.currentName, arr)
      } else {
        console.log(this.chatRecord.get(payload.name))
        this.chatRecord.get(payload.name).push(payload.content)
      }
    }

    // get currentNamess (): string {
    //   return this.currentName
    // }

    @Action
    public async asyncChangeName (payload: UserData) {
      this.changeName(payload)
    }
}

export const ChatModule = getModule(User)
