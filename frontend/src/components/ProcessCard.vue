<template>
  <v-btn
    class="text-none"
    block
    large
    @click="openProcess"
  >
    <span>
      {{ this.process.name }}
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
      // if not turned into string, the badge will render no text.
      return this.process.step - this.previousStatus;
    },
  },
  methods: {
    openProcess() {
      // TO DO: IMPLEMENT
      this.$router.push('/');
    },
  },
};
</script>
