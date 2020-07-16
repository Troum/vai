import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alert: {
      status: false,
      message: null,
      type: null
    }
  },
  mutations: {
    alert(state, data) {
      state.alert.status = data.status;
      state.alert.message = data.message;
      state.alert.type = data.type;
    }
  },
  getters: {
    alert(state) {
      return state.alert;
    }
  },
  modules: {
  }
})
