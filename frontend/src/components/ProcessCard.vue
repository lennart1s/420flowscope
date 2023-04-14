<template>
  <v-btn
    class="text-none btn"
    block
    large
    @click="openProcess"
  >
    <span style="width: 30% !important; text-align: left !important;">
      {{ this.process.name }}
    </span>
    <v-divider
      class="mx-4"
      vertical
    />
    <span style="width: 30% !important; text-align: left;">
      {{privyText}}
    </span>
    <v-divider
      class="mx-4"
      vertical
    />
    <span style="color: grey;">
      {{ this.process.date }}
    </span>
    <v-spacer/>
    <v-chip color="grey">
      <span style="color:white">
        {{ `${this.process.step}/${this.process.num_steps }` }}
      </span>
    </v-chip>
    <v-badge :color="color" :content="notifications" v-if="notifications"/>
  </v-btn>
</template>

<script>
export default {
  name: 'ProcessCard',
  props: ['process'],
  data: () => ({
    previousStatus: 1,
  }),
  computed: {
    color() {
      console.log('date', this.process.date);
      return this.notifications === '0' ? 'grey' : 'red';
    },
    privyText() {
      return this.process.privies.map((privy) => privy.name).join(', ');
    },
    notifications() {
      return this.process.step - this.previousStatus;
    },
  },
  methods: {
    openProcess() {
      // TODONE: IMPLEMENT
      this.$store.commit('setProcess', this.process);
      this.$router.push({ path: 'inspect' });
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn
  margin-block: 3px !important
</style>
