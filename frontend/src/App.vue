<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>

<style>
#app {
  background-image: linear-gradient(rgba(0, 0, 100, 255) , white);
}
</style>
