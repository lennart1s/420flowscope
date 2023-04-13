<template>
  <ProcessCard :process="{
    ID: 1,
    privies: [
      {
        id: 1,
        role:'role',
        name: 'George Washingmachine'
      },
      {
        id: 2,
        role:'role2',
        name: 'Max Mustermann'
      },
    ],
    name: 'death penalty',
    type: 'sluck',
    date: '2023-04-13',
    status: {
      numberOfSteps: 10,
      currentStep: 4,
    },
  }"/>
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
