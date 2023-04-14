<template>
  <v-container>
    <v-card>
      <v-card-title>Create new process....</v-card-title>
      <v-card-text class="ml-3 mr-3">
        <v-combobox
          label="Process Type"
          v-model="select"
          :items="typeNames"
        >
        </v-combobox>
        <ApplicationForm
          v-if="select !== null && types[select] && types[select].fields !== undefined"
          :data="types[select].fields"
          :name="select"
        >
        </ApplicationForm>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ApplicationForm from '@/components/ApplicationForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'AddProcess',
  data() {
    return {
      select: null,
      types: {},
    };
  },
  computed: {
    typeNames() {
      return Object.keys(this.types);
    },
  },
  components: {
    ApplicationForm,
  },
  methods: {
    ...mapActions(['processTypes']),
    async pullProcessTypes() {
      this.types = await this.processTypes();
    },
  },
  mounted() {
    this.pullProcessTypes();
  },
};
</script>

<style scoped>

</style>
