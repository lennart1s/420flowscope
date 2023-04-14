<template>
  <v-container fluid>
    <v-list color="rgb(255, 255, 255, 0)">
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="pending" title="Pending Processes"></CardList>
      </v-list-item>
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="done" title="Finished Processes"></CardList>
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
import { mapGetters } from 'vuex';

import CardList from '../components/CardList.vue';

export default {
  name: 'DashboardView',
  components: {
    CardList,
  },
  computed: {
    ...mapGetters(['profile']),
  },
  // created: () => {
  //   console.log(mapGetters(['profile']));
  //   if (this.profile === undefined) {
  //     this.$router.push('/login');
  //   }
  // },
};

</script>
