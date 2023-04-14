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
    <v-main color="rgb(255, 255, 255, 0.88)">
      <router-view/>
    </v-main>

  <ApplicationForm name="Baugenehmigung"
    :data="array" style="display: flex; justify-content: center"/>
  </v-app>
</template>

<script>
import ApplicationForm from '@/components/ApplicationForm.vue';

export default {
  name: 'App',

  data: () => ({
    array: [
      {
        type: 'String',
        name: 'kurze Beschreibung des Vorfalls',
        required: true,
        dependentOn: '',
      },
      {
        type: 'date',
        name: 'Datum des Vorfalls',
        required: false,
        dependentOn: '',
      },
      {
        type: 'checkbox',
        name: 'Antrag für jemand anderen',
        required: true,
        dependentOn: '',
      },
      {
        type: 'Headline',
        name: 'Adresse geschädigter',
        required: false,
        dependentOn: 'Antrag für jemand anderen',
      },
      {
        type: 'String',
        name: 'Vorname',
        required: true,
        dependentOn: 'Antrag für jemand anderen',
      },
      {
        type: 'String',
        name: 'Nachname',
        required: true,
        dependentOn: 'Antrag für jemand anderen',
      },
      {
        type: 'String',
        name: 'Straße und Hausnummer',
        required: true,
        dependentOn: 'Antrag für jemand anderen',
      },
      {
        type: 'number',
        name: 'Postleitzahl',
        required: true,
        dependentOn: 'Antrag für jemand anderen',
      },
      {
        type: 'String',
        name: 'Firma',
        required: true,
        dependentOn: '',
      },
      {
        type: 'file',
        name: 'Name',
        required: true,
        dependentOn: 'Antrag für jemand anderen',
      },
    ],
  }),
  components: {
    ApplicationForm,
  },
};
</script>

<style>
#app {
  /* background-image: linear-gradient(rgba(0, 0, 100, 255), white);*/
  background-color: #F7F3F3;
}
</style>
