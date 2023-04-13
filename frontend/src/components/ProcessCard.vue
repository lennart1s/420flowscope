<template>
    <div>
        <v-card :color="info.done ? '#68d88b' : 'red'" dark>
            <v-card-title class="text-h6">
                <v-icon v-if="info.alert" size="40">
                    mdi-alert
                </v-icon>
                    {{ info.message }}
                </v-card-title>
            <v-card-text class="white text--primary" id="cardText">
                <p>{{ getDateTime }}</p>
                <!-- eslint-disable-next-line max-len -->
                <v-btn :color="info.done ? '#68d88b' : 'red'"  @click="clicked=!clicked" class="mx-0" outlined>
                    {{ getButtonLabel }}
                </v-btn>
                <div v-if="clicked">
                  <v-file-input
                  v-if="info.alert"
                  label="File input"
                  truncate-length="15"
                  ></v-file-input>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'ProcessCard',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  computed: {
    getDateTime() {
      if (this.info.time) {
        return new Date(this.info.time).toLocaleDateString();
      }
      return '';
    },
    getButtonLabel() {
      if (this.clicked) {
        return 'See less';
      } return 'See more';
    },
    /* clickedCom() {
      return this.clicked;
    }, */
  },
};
</script>

<style scoped>
#cardText {
  padding-top: 5px;
}
</style>
