<template>
    <!-- eslint-disable-next-line max-len -->
    <div id="messageFrame">
      <div v-if="text"
      id="message"
      class="rounded-lg"
      :style="msgObj.user ? { 'float': 'left' } : { 'float': 'right' }"
      >
          {{ msgObj.msg }}
      </div>
      <div v-else>
        <v-icon size="20">
          {{ 'mdi-numeric-' + msgObj.count }}
        </v-icon>
        <v-divider></v-divider>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ComMessage',
  props: {
    msgObj: Object,
    index: Number,
  },
  data() {
    return {
      divCount: 0,
      icons: [],
    };
  },
  computed: {
    text() {
      if (this.msgObj.div) return false;
      return true;
    },
  },
};
</script>

<style scoped>
#message {
  background-color: #FFFFFF;
  height: 100%;
  padding: 2px;
}
#messageFrame {
  width: 100%;
}
</style>
