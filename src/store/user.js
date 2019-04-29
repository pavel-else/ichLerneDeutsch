import firebase from 'firebase'

export default {
  state: {
    user: {
      isAuth: false,
      uid: null
    }
  },
  getters: {
    isAuth: state => state.user.isAuth
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuth = true
      state.user.uid = payload
    }
  },
  actions: {
    SIGNUP({ commit }, user) {
      commit('SET_PROCESSING', true )

      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(user => {
        commit('SET_PROCESSING', false)
        commit('SET_USER', user.uid)
      })
      .catch(function(error) {
        commit('SET_PROCESSING', false)
        commit('SET_ERROR', error.message)
      });
    }
  }
}