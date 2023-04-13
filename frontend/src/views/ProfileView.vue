<template>
  <v-container>
    <v-row>
      <v-spacer/>
      <v-card class="mt-8 px-8" width="30% " color="rgba(255, 255, 255, 0.9)">
        <v-container>
          <v-row>
            <v-spacer/>
            <!-- <v-btn disabled fab outlined color="grey" x-large> -->
            <v-icon size="100"> mdi-account </v-icon>
            <!-- </v-btn> -->
            <v-spacer/>
          </v-row>
          <v-row>
            <v-spacer/>
            {{ `${currentUser['firstname']} ${currentUser['lastname']}` }}
            <v-spacer/>
          </v-row>
          <profile-value
            v-for="valueName in
              ['email', 'birthday', 'personnel number', 'street', 'house number', 'zip code']"
            :key="valueName"
            :value-name="capitalizeSentence(valueName)"
            :value="currentUser[valueName]"
          />
        <v-row>
        <v-spacer/>
        <v-btn class="mt-4 mb-4" outlined color="indigo">
          Connect BID
        </v-btn>
        </v-row>
        </v-container>
      </v-card>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
import users from '../../../db/users.json';
import ProfileValue from '../components/ProfileValue.vue';

export default {
  components: { ProfileValue },
  name: 'ProfileView',
  props: ['user'],
  data: () => ({
    userData: users,
  }),
  computed: {
    currentUser() {
      return this.userData[this.user];
    },
  },
  methods: {
    capitalizeSentence: (string) => {
      const words = string.split(' ');
      for (let i = 0; i < words.length; i += 1) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(' ');
    },
  },
};

</script>

<style>
</style>
