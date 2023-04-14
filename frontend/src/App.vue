<template>
  <v-app>
    <v-main>
      <MagicHelper></MagicHelper>
      oawidaowdijaowjdoiajwdio
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MagicHelper from './components/MagicHelper.vue';

export default {
  name: 'App',

  components: {
    MagicHelper,
  },

  data: () => ({
    //
  }),
};
</script>
