<template>
    <div>
      <v-timeline-item
      :color="done ? greenHex : redHex"
      :left="info.user"
      :icon="'mdi-numeric-' + (index+1)"
      >
        <v-card :color="done ? greenHex : redHex" dark>
            <v-card-title class="text-h6">
                <v-icon v-if="info.alert" size="40">
                    mdi-alert
                </v-icon>
                    <div>
                      {{ info.description }}
                    </div>
            </v-card-title>
            <v-card-subtitle>
              {{ privie != null ? privie.name : ''}} <!-- handle no-privy-given error -->
            </v-card-subtitle>
            <v-card-text class="text--primary" id="cardText">
              <!-- eslint-disable-next-line max-len -->
              <v-btn :color="done ? greenHex : redHex"  @click="clicked=!clicked" class="mx-0" outlined>
                {{ getButtonLabel }}
              </v-btn>
            </v-card-text>
            <div id="cardTextBox">
              <v-expand-transition>
                <div v-show="clicked">
                  <p v-if="getDateTime()">Abgeschlossen am: {{ getDateTime() }}</p>
                  <v-file-input id="fileInput"
                  v-if="isFile"
                  label="File input"
                  truncate-length="15"
                  ></v-file-input>
                </div>
              </v-expand-transition>
            </div>
        </v-card>
      </v-timeline-item>
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
    index: Number,
    step: Number,
    privie: Object,
  },
  data() {
    return {
      clicked: false,
      greenHex: '#62ad75',
      redHex: '#e55322',
    };
  },
  computed: {
    /* getDateTime() {
      if (this.info.time) {
        return new Date(this.info.time).toLocaleDateString();
      }
      return '';
    }, */
    getButtonLabel() {
      if (this.clicked) {
        return 'See less';
      } return 'See more';
    },
    done() {
      if (this.index < this.step) {
        return true;
      }
      return false;
    },
    isFile() {
      return (this.info.type === 'file');
    },
    /* clickedCom() {
      return this.clicked;
    }, */
  },
  methods: {
    getDateTime() {
      if (this.info.time) {
        return new Date(this.info.time).toLocaleDateString();
      }
      return '';
    },
  },
};
</script>

<style scoped>
#cardText {
  padding-top: 5px;
  background-color: white;
}
#fileInput {
  color:black;
}
#privieName {
  float:right;
}
#cardTitle {
  vertical-align: middle;
}
</style>
