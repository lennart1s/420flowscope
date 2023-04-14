<template>
  <div class="wrapper" :style="{'top': `${y}px`, 'left': `${x}px`}">
    <textarea v-model="comment" autofocus></textarea>
  </div>
</template>

<script>
export default {
  name: 'CommentBubble',
  components: {
  },
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    comment: '',
  }),
  mounted() {
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  position: fixed
  // top: 30%
  // left: 30%

  background-color: rgba(240, 240, 240, 1)

  padding: 10px
  padding-top: 13px
  height: 30px
  width: 60px
  resize: both
  width: max-content !important
  height: max-content !important
  border-radius: 5px
  box-shadow: 3px 2px 1px 1px rgba(0,0,0,0.1)
  // height: max-content !important
  // width: 20px
  // height: 20px
  // background-color: green
  &&::after
    content: ""
    position: absolute
    top: -10px
    left: calc(50% - 7px)
    width: 20px
    height: 20px
    background-color: inherit
    transform: rotate(45deg)
    border-radius: 5px
</style>
