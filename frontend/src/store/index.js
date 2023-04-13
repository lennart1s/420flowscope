import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
  },
  getters: {
    profile: (state) => state.profile,
  },
  mutations: {
  },
  actions: {
    async login({ state }, { email, password }) {
      try {
        const resp = await fetch('http://localhost:7071/auth/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            email,
            password,
          }),
        });
        if (resp.status !== 200) {
          state.profile = null;
          return null;
        }
        const profile = await resp.json();

        state.profile = profile;
        return profile;
      } catch (e) {
        state.profile = null;
        return null;
      }
    },
  },
  modules: {
  },
});
