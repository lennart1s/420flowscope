<template>
  <v-container fluid style="margin-top: 30px">
    <!--<v-list color="rgb(255, 255, 255, 0)">
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="pending" title="Offene Prozesse"></CardList>
      </v-list-item>
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="done" title="Beendete Prozesse"></CardList>
      </v-list-item>
    </v-list>-->
    <v-card style="padding: 10px 20px 20px 20px">
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <v-tab value="pending" class="tab">Offene Prozesse</v-tab>
        <v-tab value="done" class="tab">Abgeschlossene Prozesse</v-tab>
        <v-tab value="all" class="tab">Alle Prozesse</v-tab>
      </v-tabs>

      <v-text-field
            label="Suche..."
            v-model="search"
            prepend-icon="mdi-magnify"
          ></v-text-field>

      <v-list-item
        v-for="process, i in processes"
        :key="i"
        style="padding:5px"
      >
        <ProcessCard class="mt-3 mb-3" :process="process"></ProcessCard>
      </v-list-item>
    </v-card>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
// import CardList from '../components/CardList.vue';
import ProcessCard from '@/components/ProcessCard.vue';

export default {
  name: 'DashboardView',
  components: {
    // CardList,
    ProcessCard,
  },
  data: () => ({
    tab: null,
    search: '',
  }),
  computed: {
    processes() {
      const processes = this.$store.state.processes.filter(
        (p) => p.name.toLowerCase().includes(this.search.toLowerCase()),
      );

      return processes;
    },
  },
  methods: {
    ...mapActions(['getProcesses']),
  },
  watch: {
    tab: {
      immediate: true,
      handler() {
        this.getProcesses({
          /* eslint-disable no-nested-ternary */
          status: this.tab === 2 ? 'all' : this.tab === 1 ? 'done' : 'pending',
        });
      },
    },
  },
};

</script>

<style lang="stylus" scoped>
.tab
  text-transform: none
</style>
