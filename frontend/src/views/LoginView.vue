<template>
  <div class="wrapper">
    <v-card :class="['card', {'valid': valid}]" outlined>
      <h2 class="mx-4 mt-4">
        Welcome to 420FlowScope!
      </h2>
      <v-form>
       <v-container class="mt-8">
          <v-text-field
            v-model="email"
            label="E-mail"
            required
            @input="valid = true"
            outlined
          />
          <v-text-field
            outlined
            v-model="password"
            label="Password"
            required
            type="password"
            @input="valid = true"
          />
          <v-btn
            class="text-none xxx"
            text
            color="primary"
            plain
          >
            <u>
              forgot password?
            </u>
          </v-btn>
        </v-container>

     </v-form>
       <v-container md="3" style="display: flex; justify-content: center; margin-bottom: ">
        <v-row class="mb-4 mx-6">
          <v-spacer/>
          <v-btn
            elevation="2"
            color="blue"
            @click="submit()"
          >
            Log in
          </v-btn>
        </v-row>
       </v-container>
      </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginView',
  data: () => ({
    email: '',
    password: '',
    valid: true,
  }),
  methods: {
    ...mapActions(['login']),
    async submit() {
      const profile = await this.login({
        email: this.email,
        password: this.password,
      });

      if (!profile) {
        this.valid = false;
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center;

.card
  width: 40%
  left: 30%
  border: 2px grey solid
  &&:not(.valid)
    border-color: red

.xxx
  margin-top: -3em !important

</style>
