import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
    process: null,
    processes: [],
    done_processes: null,
    pending_processes: null,
    process_types: null,
  },
  getters: {
    profile: (state) => state.profile,
    process: (state) => state.process,
    done_processes: (state) => state.done_processes,
    pending_processes: (state) => state.pending_processes,
    process_types: (state) => state.process_types,
  },
  mutations: {
    setProcess(state, newProcess) {
      state.process = newProcess;
    },
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
    async getProcesses({ state }, { status }) {
      try {
        const url = new URL('http://localhost:7071/process');
        if (status) {
          url.searchParams.append('status', status);
        }
        const resp = await fetch(url);

        if (resp.status !== 200) {
          state.processes = [];
          return [];
        }

        const processes = await resp.json();

        state.processes = processes;
        return processes;
      } catch (e) {
        state.processes = [];
        return [];
      }
    },
    async pendingProcesses({ state }) {
      try {
        const resp = await fetch('http://localhost:7071/process?status=pending');
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
        const resp = await fetch('http://localhost:7071/process?status=done');
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
    async processTypes({ state }) {
      try {
        const resp = await fetch('http://localhost:7071/process/types');
        if (resp.status !== 200) {
          state.process_types = null;
          return null;
        }
        const types = await resp.json();
        state.process_types = types;
        return types;
      } catch (e) {
        return null;
      }
    },
  },
  modules: {
  },
});
