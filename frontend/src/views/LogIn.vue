<template>
  <div style="width: 40%; left: 30%; border: 2px grey solid; border-radius: 15px;">
     <v-form v-model="valid">
      <v-container>
        <v-col>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="password"
            label="Password"
            required
            type="password"
          ></v-text-field>
        </v-col>
      </v-container>

    </v-form>
      <v-container md="3" style="display: flex; justify-content: center; margin-bottom: ">
        <v-btn
        @click="test()">
          Log in
        </v-btn>
      </v-container>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
  methods: {
    test() {
      console.log('hdasd');
    },
  },
};
</script>
