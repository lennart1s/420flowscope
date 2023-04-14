<template>
  <v-container class="flexCon">
    <p style="text-align: center; color: rgb(65,62,56); font-size: 22px">{{ name }}</p>
    <v-container

     :key="`${entry.name}-${idx}`"
     v-for="entry, idx in data">

        <v-container fluid
          :class="'posDep'"
          v-if="showEl(entry.dependentOn) && entry.type === 'TextArea'"

          :required="entry.required">
          <v-textarea
            name="input-7-1"
            filled
            :label="entry.name"
            auto-grow
          ></v-textarea>
        </v-container>
        <v-text-field
          :class="'posDep'"
          v-if="showEl(entry.dependentOn) && entry.type === 'String'"
          :label="entry.name"
          :required="entry.required"
        >
        </v-text-field>

      <v-file-input
        :class="'posDep'"
        v-if="showEl(entry.dependentOn) && entry.type.indexOf('file-') > -1"
        :accept="entry.type.replace('file-','')+'/*'"
        :label="entry.name"
        multiple
        show-size
      ></v-file-input>

      <v-text-field
        :class="'posDep'"
        v-if="showEl(entry.dependentOn) && entry.type === 'number'"
        :label="entry.name"
        :required="entry.required"
      ></v-text-field>

      <v-col style="text-align: center"
      :class="'posDep'"
      v-if="showEl(entry.dependentOn) && entry.type === 'Headline'">
        <p style="text-align: center">{{ entry.name }}</p>
      </v-col>
      <v-col :class="'posDep'"
      v-if="showEl(entry.dependentOn) && entry.type === 'date'">
        <p>{{ entry.name }}</p>
        <v-date-picker :label="entry.name"></v-date-picker>
      </v-col>

      <v-checkbox
        v-if="entry.type === 'checkbox'"
        :label="entry.name"
        :id="entry.name"
        :ref="entry.name"
        @change="$set(deps, entry.name, $event);"
      ></v-checkbox>
    </v-container>
    <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="submit()"
    >
      Antrag Senden
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ApplicationForm',
  data: () => ({
    deps: {},
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(['createProcess']),
    showEl(dependentOn) {
      return dependentOn === '' || !!this.deps[dependentOn];
    },
    async submit() {
      await this.createProcess();
      this.$router.push('/');
    },
  },
};

</script>
<style scoped>
.flexCon{
  display: flex; flex-direction: column
}
.hiddenElem{
  display: 'none';
}
</style>
