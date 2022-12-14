//  这个就跟我们刚才写的一样
import Vue from 'vue'
import Vuex from 'vuex'
import createPresistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// 1.下载
// yarn add vuex-persistedstate@3.2.1
// 2.引入
// import createPersistedstate from 'vuex-persistedstate'
// 3.调用
// plugins:[createPersistedstate()]
export default new Vuex.Store({
  plugins: [
    createPresistedState({
      key: 'HEIMA_TOUTIAO',
      // storage:window.sessionStorage更改存储的位置
      reducer({ tokenObj, myChannels, histories }) {
        return { tokenObj, myChannels, histories }
        // 此方法可以想传什么数据就爱传什么数据，而不是传全部
      }
    })
  ],
  state: {
    tokenObj: {},
    myChannels: [],
    histories: []
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.tokenObj = token
    },

    SET_MY_CHANNELS(state, channels) {
      state.myChannels = channels
    },
    SET_HISTORIES(state, histories) {
      state.histories = histories
    }
  }
})
