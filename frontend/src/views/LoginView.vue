<template>
  <div class="wrapper">
    <v-card :class="['card', {'valid': valid}]">
      <v-form>
       <v-container>
         <v-col>
           <v-text-field
             v-model="email"
             label="E-mail"
             required
             @input="valid = true"
           ></v-text-field>
         </v-col>
         <v-col>
           <v-text-field
             v-model="password"
             label="Password"
             required
             type="password"
             @input="valid = true"
           ></v-text-field>
         </v-col>
       </v-container>

     </v-form>
       <v-container md="3" style="display: flex; justify-content: center; margin-bottom: ">
         <v-btn
         @click="submit()">
           Log in
         </v-btn>
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

</style>
