<template>
    <div id="frame">
        <v-timeline id="timeline">
            <div v-for="(step,index) in getProcessSteps" :key="index">
              <process-step-card :info="step" :index="index" :step="getProcessStep"/>
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
        <!-- <div id="chatFrame">
            <com-chat/>
        </div> -->
    </div>
</template>

<script>
import ProcessStepCard from './ProcessStepCard.vue';

export default {
  components: {
    ProcessStepCard,
  },
  data() {
    return {
      processNr: this.$store.getters.process.num_steps,
      processSteps: this.$store.getters.process.steps,
    };
  },
  computed: {
    getProcessSteps() {
      return this.$store.getters.process.steps;
    },
    getProcessStep() {
      return this.$store.getters.process.step;
    },
  },
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
