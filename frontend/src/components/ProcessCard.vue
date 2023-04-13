<template>
  <v-btn
    class="text-none"
    block
    large
  >
    <span>
      {{procedureType}}
    </span>
    <v-divider
      class="mx-4"
      vertical
    />
    <span>
      {{privy}}
    </span>
    <v-spacer/>
    <v-chip :color="color">
      <span style="color:white">
        {{ notifications }}
      </span>
    </v-chip>
  </v-btn>
</template>

<script>
export default {
  name: 'ProcessCard',
  props: ['procedureType', 'privy', 'notifications'],
  // data: () => {
  //   return {
  //   };
  // },
  computed: {
    color() {
      return this.notifications === 0 ? 'grey' : 'red';
    },
  },
};
</script>

<style>
</style>
