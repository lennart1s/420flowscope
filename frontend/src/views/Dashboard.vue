<template>
  <v-container fluid>
    <v-list>
      <v-list-item>
        <CardList stage="pending" title="Offene Prozesse"></CardList>
      </v-list-item>
      <v-list-item>
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
