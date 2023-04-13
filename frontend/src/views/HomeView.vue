<template>
  <ProcessCard :procedure-type="'EZ'" :privy="'Gegner'" :notifications="0"/>
</template>

<script>
import ProcessCard from '../components/ProcessCard.vue';

export default {
  name: 'HomeView',

  components: {
    ProcessCard,
  },
};
</script>
