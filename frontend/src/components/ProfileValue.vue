<template>
  <v-row v-if="value">
    <v-container>
      <v-row>
        {{`${valueName}:`}}
        <v-spacer/>
        {{`${value}`}}
      </v-row>
      <v-row>
        <v-divider/>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  props: ['valueName', 'value'],
};
</script>

<style>

</style>
