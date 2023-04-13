<template>
  <v-container fluid>
    <v-list>
      <v-list-item>
        <CardList stage="ongoing" title="Offene Prozesse"></CardList>
      </v-list-item>
      <v-list-item>
        <CardList stage="finished" title="Beendete Prozesse"></CardList>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>

import CardList from '../components/CardList.vue';

export default {
  name: 'DashboardView',
  components: { CardList },
};

</script>

<style scoped>

</style>
