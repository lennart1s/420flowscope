<template>
    <div id="frame">
        <v-timeline>
            <li v-for="(step,index) in processSteps" :key="index">
              <v-timeline-item
                :color="step.done ? '#68d88b' : 'red'"
                :left="step.user"
              >
                <v-card :color="step.done ? '#68d88b' : 'red'" dark>
                  <v-card-title class="text-h6">
                    {{ step.message }}
                    <!-- <v-icon size="64">
                      mdi-alert
                    </v-icon> -->
                  </v-card-title>
                <v-card-text class="white text--primary">
                  <p>{{ step.description }}</p>
                  <v-btn :color="step.done ? '#68d88b' : 'red'" class="mx-0" outlined>
                    See more
                  </v-btn>
                </v-card-text>
                </v-card>
              </v-timeline-item>
            </li>
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

export default {
  data() {
    return {
      processSteps: json.steps,
    };
  },
};
</script>

<style scoped>
#frame {
    width: 70%
}
</style>
