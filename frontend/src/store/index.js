import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
    done_processes: null,
    pending_processes: null,
  },
  getters: {
    profile: (state) => state.profile,
    done_processes: (state) => state.done_processes,
    pending_processes: (state) => state.pending_processes,
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
    async pendingProcesses({ state }) {
      try {
        const resp = await fetch('http://localhost:7071/process', {
          headers: { status: 'pending' },
        });
        if (resp.status !== 200) {
          console.log(resp.status);
          state.pending_processes = null;
          return null;
        }
        const processes = await resp.json();
        state.pending_processes = processes;
        return processes;
      } catch (e) {
        state.pending_processes = null;
        return null;
      }
    },
    async doneProcesses({ state }) {
      try {
        const resp = await fetch('http://localhost:7071/process', {
          headers: { status: 'done' },
        });
        if (resp.status !== 200) {
          state.done_processes = null;
          return null;
        }
        const processes = await resp.json();
        state.done_processes = processes;
        return processes;
      } catch (e) {
        state.done_processes = null;
        return null;
      }
    },
  },
  modules: {
  },
});
