import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
import general from '@/store/general'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    general,
  }
})
