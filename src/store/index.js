/**
 * Created by Administrator on 2017/12/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    notification: {
      order: 0
    }
  },
  getters: {
    // getToken: () =>{
    //   return localStorage.getItem('token')
    // }
  },
  mutations: {
    initTableNoList(state, tableNoList){ // 桌号初始化
      state.tableNoList = tableNoList
    }
  }
})
