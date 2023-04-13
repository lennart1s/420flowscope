<template>
    <div id="frame">
        <v-timeline>
            <div v-for="(step,index) in processSteps" :key="index">
              <v-timeline-item
                :color="step.done ? '#68d88b' : 'red'"
                :left="step.user"
              >
              <process-card :info="step"/>
              </v-timeline-item>
            </div>
            <!--<v-timeline-item>
                Test1
            </v-timeline-item>
            <v-timeline-item>
                Test2
            </v-timeline-item>
            <v-timeline-item>
                Test3
            </v-timeline-item>-->
        </v-timeline>
    </div>
</template>

<script>
import json from '../assets/processSteps.json';
import ProcessCard from './ProcessCard.vue';

export default {
  components: { ProcessCard },
  data() {
    return {
      processSteps: json.steps,
    };
  },
  /* methods: {
    getStepDate: function (step) {
      console.log(step.time);
      // eslint-disable-next-line no-prototype-builtins
      if (step.hasOwnProperty('time')) return (new Date(step.time).toLocaleDateString());
      return '';
    },
  }, */
};
</script>

<style scoped>
#frame {
    width: 70%;
    padding-left: 20px;
}
</style>
