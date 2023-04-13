<template>
<v-card width="100%" class="mb-6 mt-6" color="rgb(255, 255, 255, 0)">
  <v-list>
    <v-list-item>
      <v-list-item-title class="text-h6">{{ title }}</v-list-item-title>
      <v-list-item-action>
        <v-text-field
          label="Suche..."
          v-model="search"
          @input="filterProcesses()"
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="process in filteredProcesses"
      :key="process.name"
    >
      <ProcessCard class="mt-3 mb-3" :process="process"></ProcessCard>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>
import { mapActions } from 'vuex';
import ProcessCard from './ProcessCard.vue';

export default {
  name: 'CardList',
  components: {
    ProcessCard,
  },
  data() {
    return {
      processes: [],
      filteredProcesses: [],
      search: '',
    };
  },
  props: {
    stage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(['pendingProcesses', 'doneProcesses']),
    filterProcesses() {
      if (this.search === undefined || this.search === '') {
        this.filteredProcesses = this.processes;
        return;
      }
      const filtered = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.processes.length; i++) {
        if (this.processes[i].name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) {
          filtered.push(this.processes[i]);
        }
      }
      this.filteredProcesses = filtered;
    },
    async pullProcesses() {
      if (this.stage === 'done') {
        this.processes = await this.doneProcesses();
      } else if (this.stage === 'pending') {
        this.processes = await this.pendingProcesses();
      }
      this.filteredProcesses = this.processes;
    },
  },
  mounted() {
    this.pullProcesses();
  },
};
</script>
