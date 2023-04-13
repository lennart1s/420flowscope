<template>
  <v-btn
    class="text-none"
    block
    large
    @click="openProcess"
  >
    <span>
      {{process.name}}
    </span>
    <v-divider
      class="mx-4"
      vertical
    />
    <span>
      {{privyText}}
    </span>
    <v-divider
      class="mx-4"
      vertical
    />
    <span style="color:grey">
      {{ this.process.date }}
    </span>
    <v-spacer/>
    <v-chip color="grey">
      <span style="color:white">
        {{ `${this.process.status.currentStep}/${this.process.status.numberOfSteps}` }}
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
    previousStatus: 2,
  }),
  computed: {
    color() {
      return this.notifications === '0' ? 'grey' : 'red';
    },
    privyText() {
      return this.process.privies.map((privy) => privy.name).join(', ');
    },
    notifications() {
      return this.process.status.currentStep - this.previousStatus;
    },
  },
  methods: {
    openProcess() {
      console.log('button clicked');
      // TO DO: IMPLEMENT
    },
  },
};
</script>
