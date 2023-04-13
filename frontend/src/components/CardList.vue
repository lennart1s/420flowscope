<template>
<v-card width="100%" class="mb-6 mt-6">
  <v-list>
    <v-list-item>
      <v-list-item-title class="text-h6">{{ title }}</v-list-item-title>
      <v-list-item-action>
        <v-text-field
          label="Suche..."
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="process in processes"
      :key="process.name"
    >
      <ProcessCard class="mt-3 mb-3" :process=process></ProcessCard>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>
import ProcessCard from './ProcessCard.vue';

export default {
  name: 'CardList',
  components: {
    ProcessCard,
  },
  data() {
    return {
      processes: [],
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
    pullProcesses() {
      this.processes = [
        {
          id: 'gaylord fucker',
          privies: [
            { id: 1, role: 'badasf', name: 'Bürger' },
            { id: 2, role: 'Chef', name: 'Staat' },
          ],
          name: 'Name',
          type: 'Typ',
          date: '11.09.2001',
          status: {
            status: 'open',
            numberOfSteps: 10,
            currentStep: 4,
          },
        },
      ];
    },
  },
  mounted() {
    this.pullProcesses();
  },
};
</script>
