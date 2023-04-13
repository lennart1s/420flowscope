<template>
  <v-container>
    <p>{{ name }}</p>
    <v-col
     :key="entry.name"
     v-for="entry in data"
     style="display: flex; flex-direction: column">
        <v-text-field
          :class="'posDep ^'+entry.dependentOn+'_ '"
          v-if="entry.type === 'String'"
          :label="entry.name"
          :required="entry.required"
          v-model="text"
        >
      </v-text-field>
        <v-file-input
          :class="'posDep ^'+entry.dependentOn+'_ '"
          v-if="entry.type.indexOf('file-') > -1"
          :accept="entry.type.replace('file-','')+'/*'"
          :label="entry.name"
        ></v-file-input>
      <div>
        <v-text-field
          :class="'posDep ^'+entry.dependentOn+'_ '"
          v-if="entry.type==='number'"
          :label="entry.name"
          :required="entry.required"
          v-model="text"
        ></v-text-field>
      </div>
      <div>
      <v-row :class="'posDep ^'+entry.dependentOn+'_'" v-if="entry.type === 'date'">
        <p>{{ entry.name }}</p>
        <v-date-picker :label="entry.name"></v-date-picker>
      </v-row>
      <div >
        <v-checkbox
          v-if="entry.type === 'checkbox'"
          :label="entry.name"
          :id="entry.name"
          @click="checkDeps()"
        ></v-checkbox>
      </div>
    </div>
    </v-col>
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
      console.log('dependentOn: ', dependentOn);
      if (dependentOn === null || dependentOn === '') {
        return true;
      }
      const box = document.getElementById(dependentOn);
      console.log('box: ', box.ariaChecked);
      if (box === null || box.ariaChecked === null) {
        return true;
      }
      return box.ariaChecked;
    },
    checkDeps() {
      const array = document.getElementsByClassName('posDep');
      for (let i = 0; i < array.length; i += 1) {
        console.log('------------------');
        const e = array[i].className;
        const b = this.isChecked(e.substring(e.indexOf('^') + 1, e.indexOf('_')));
        if (b === true) {
          console.log('checked', b);
          if (e != null && e !== undefined && e.style != null && e.style !== undefined) {
            e.style.visibility = 'visible';
          }
        } else {
          console.log('not checked', b);
          if (e != null && e !== undefined && e.style != null && e.style !== undefined) {
            e.style.visibility = 'visible';
          }
        }
      }
    },
  },
};
</script>
