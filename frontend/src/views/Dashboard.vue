<template>
  <v-container fluid>
    <v-list color="rgb(255, 255, 255, 0)">
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="pending" title="Pending Processes"></CardList>
      </v-list-item>
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="done" title="Finished Processes"></CardList>
      </v-list-item>
    </v-list>
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
};

</script>
