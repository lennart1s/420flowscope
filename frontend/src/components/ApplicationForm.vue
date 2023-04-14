<template>
  <v-container class="flexCon">
    <p>{{ name }}</p>

    <v-container

     :key="`${entry.name}-${idx}`"
     v-for="entry, idx in data">
        <v-text-field
          :class="'posDep ^'+entry.dependentOn+'_ hiddenElem'"
          v-if="entry.type === 'String'"
          :label="entry.name"
          :required="entry.required"
        >
        </v-text-field>

      <v-file-input
        :class="'posDep ^'+entry.dependentOn+'_ hiddenElem'"
        v-if="entry.type.indexOf('file-') > -1"
        :accept="entry.type.replace('file-','')+'/*'"
        :label="entry.name"
        multiple
        show-size
      ></v-file-input>

      <v-text-field
        :class="'posDep ^'+entry.dependentOn+'_ hiddenElem'"
        v-if="entry.type === 'number'"
        :label="entry.name"
        :required="entry.required"
      ></v-text-field>

      <v-col style="text-align: center"
      :class="'posDep ^'+entry.dependentOn+'_ hiddenElem'"
      v-if="entry.type === 'Headline'">
        <p style="text-align: center">{{ entry.name }}</p>
      </v-col>
      <v-col :class="'posDep ^'+entry.dependentOn+'_ hiddenElem'"
      v-if="entry.type === 'date'">
        <p>{{ entry.name }}</p>
        <v-date-picker :label="entry.name"></v-date-picker>
      </v-col>

      <v-checkbox
        v-if="entry.type === 'checkbox'"
        :label="entry.name"
        :id="entry.name"
        @click="checkDeps()"
      ></v-checkbox>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'ApplicationForm',
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
    isChecked(dependentOn) {
      if (dependentOn === null || dependentOn === '') {
        return false;
      }
      const box = document.getElementById(dependentOn);
      if (box === null || box.ariaChecked === null) {
        return false;
      }
      return box.ariaChecked;
    },
    checkDeps() {
      console.log('checkdeps');
      const array = document.getElementsByClassName('posDep');
      for (let i = 0; i < array.length; i += 1) {
        console.log(i);
        const e = array[i];
        e.className = e.className.replace('hiddenElem', '');
        const c = e.className;
        const b = this.isChecked(c.substring(c.indexOf('^') + 1, c.indexOf('_')));
        console.log(b);
        if (b !== 'false' && b) {
          if (e != null && e !== undefined) {
            e.style.display = 'none';
          }
        } else if (e != null && e !== undefined) {
          e.style.display = 'block';
        }
      }
    },
  },
  mounted() {
    console.log('data', this.data);
    this.checkDeps();
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
