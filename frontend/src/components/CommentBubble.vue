<template>
  <v-card class="wrapper">
    <v-textarea v-model="comment" :auto-grow="true"></v-textarea>
  </v-card>
</template>

<script>
export default {
  name: 'CommentBubble',
  components: {
  },
  data: () => ({
    comment: 'Deine Mama',
  }),
};
</script>

<style lang="stylus" scoped>
.wrapper
  position: fixed
  top: 30%
  left: 30%

  background-color: white

  padding: 10px
  width: max-content !important
  height: max-content !important
  // height: max-content !important
  // width: 20px
  // height: 20px
  // background-color: green
</style>
