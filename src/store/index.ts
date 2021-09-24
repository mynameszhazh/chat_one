import Vue from 'vue'
import Vuex from 'vuex'
import { currentUserState } from './modules/chat'

Vue.use(Vuex)

export interface IRootState {
    chat: currentUserState
}
// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
