<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- ggf noch loading icon + skeleton loading-->
      <span class="text-h6">420flowscope</span>
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
          <v-list-item to="/profile">
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
  background-image: url('./assets/stacked-waves-haikei.svg');
  background-size: cover;
}
</style>
