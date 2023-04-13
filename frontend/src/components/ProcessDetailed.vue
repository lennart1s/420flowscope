<template>
    <div id="frame">
        <v-timeline id="timeline">
            <div v-for="(step,index) in processSteps" :key="index">
              <v-timeline-item
                :color="step.done ? '#68d88b' : 'red'"
                :left="step.user"
                :icon="'mdi-numeric-' + (index+1)"
              >
              <process-step-card :info="step"/>
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
        <div id="chatFrame">
            <com-chat/>
        </div>
    </div>
</template>

<script>
import json from '../assets/processSteps.json';
import ProcessStepCard from './ProcessStepCard.vue';
import ComChat from './ComChat.vue';

export default {
  components: {
    ComChat,
    ProcessStepCard,
  },
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
    width: 100%;
    padding-left: 20px;
    display: flex;
}
#timeline {
  width: 70%;
}
#chatFrame {
  position: fixed;
  width: 28%;
  height: 50%;
  right:0%;
  bottom:0%;
}
</style>
