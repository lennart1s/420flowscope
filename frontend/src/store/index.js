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
    async createProcess() {
      try {
        console.log('create');
        await fetch('http://localhost:7071/process', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'arbitration',
            payload: {
              id: '2123123',
              name: 'Beihilfe',
              privies: [
                {
                  name: 'Max Mustermann',
                },
                {
                  name: 'Beihilfestelle',
                },
              ],
              num_steps: 2,
              step: 1,
              date: new Date().toLocaleDateString(),
            },
            /*
            {
    "id": "1",
    "type": "arbitration",
    "name": "Kompensation: Flugausfall MH370/MAS370",
    "privies": [
      {
        "id": "max.mustermann@mail.de",
        "role": "applicant",
        "name": "MaximilainMustermann"
      },
      {
        "id": "lawfirm@mail.de",
        "role": "company",
        "name": "Hengeler Mueller"
      }
    ],
    "num_steps": 5,
    "step": 5,
    "steps": [
            */
          }),
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {
  },
});
