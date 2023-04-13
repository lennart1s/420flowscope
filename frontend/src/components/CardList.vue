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
    <v-list-item>
      <v-list-item-title>Insert Card Component</v-list-item-title>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>
export default {
  name: 'CardList',
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
};
</script>

<style scoped>

</style>
