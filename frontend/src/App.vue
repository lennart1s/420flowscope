<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- ggf noch loading icon + skeleton loading-->
      <v-btn class="text-h6" plain to="/">420flowscope</v-btn>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            plain
            class="mr-2"
          >
            <v-icon>mdi-account</v-icon>
            Account
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/settings">
            <v-list-item-title>
              <v-icon class="mr-2">mdi-cog</v-icon>
              Einstellungen
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/logout">
            <v-list-item-title>
              <v-icon class="mr-2">mdi-logout</v-icon>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main color="rgb(255, 255, 255, 0.88)">
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
  background-image: linear-gradient(rgba(0, 0, 100, 255), white);
}
</style>
