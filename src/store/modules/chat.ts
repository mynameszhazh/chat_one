// user.ts
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface currentUserState {
    currentName: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements currentUserState {
    public currentName = '小明'

    @Mutation
    changeName (payload: string): void {
      // console.log(payload)
      this.currentName = payload
    }

    get currentNamess (): string {
      return this.currentName
    }

    @Action
    public async asyncChangeName (payload: string) {
      this.changeName(payload)
    }
}

export const ChatModule = getModule(User)
