<template>
  <v-container fluid>
    <v-list color="rgb(255, 255, 255, 0)">
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="pending" title="Offene Prozesse"></CardList>
      </v-list-item>
      <v-list-item color="rgb(255, 255, 255, 0.88)">
        <CardList stage="done" title="Beendete Prozesse"></CardList>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>

import CardList from '../components/CardList.vue';

export default {
  name: 'DashboardView',
  components: {
    CardList,
  },
};

</script>
