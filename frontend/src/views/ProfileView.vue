<template>
  <v-container>
    <v-row>
      <v-spacer/>
      <v-card class="mt-8 px-8" width="40% " color="rgba(255, 255, 255, 0.9)">
        <h1 class="mt-4">Your Profile</h1>
        <v-container class="mt-6">
          <v-row>
            <v-spacer/>
            <v-icon size="100"> mdi-account </v-icon>
            <v-spacer/>
          </v-row>
          <v-row>
            <v-spacer/>
            {{ `${profile['firstname']} ${profile['lastname']}` }}
            <v-spacer/>
          </v-row>
          <v-container class="mt-10">
            <profile-value
              v-for="valueName in
                ['email', 'birthday', 'personnel number', 'street', 'house number', 'zip code']"
              :key="valueName"
              :value-name="capitalizeSentence(valueName)"
              :value="profile[valueName]"
            />
          </v-container>
        <v-row>
        <v-spacer/>
        <v-btn class="mt-10 mb-4" outlined color="indigo">
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
import { mapGetters } from 'vuex';
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
    ...mapGetters(['profile']),
  },
  methods: {
    capitalizeSentence: (string) => {
      const words = string.split(' ');
      for (let i = 0; i < words.length; i += 1) {
        words[i] = `${words[i][0].toUpperCase()}${words[i].substr(1)}`;
      }
      return words.join(' ');
    },
  },
};

</script>

<style>
</style>
