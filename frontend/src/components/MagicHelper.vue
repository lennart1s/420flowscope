<template>
  <div class="wrapper">
    <v-btn
      class="btn"
      v-show="showButton"
      color="#CCCCCC"
      @click="startup"
    >
      Frage?
    </v-btn>

    <v-card v-show="showDialog" class="card text-right">
      <div ref="capture" class="capture"></div>
      <v-btn @click="close" color="primary" right>
        Abschicken
      </v-btn>
    </v-card>

    <CommentBubble v-for="pos, i of commentPostions"
      :key="i"
      :x="pos[0]"
      :y="pos[1]"
    ></CommentBubble>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

import CommentBubble from './CommentBubble.vue';

export default {
  name: 'MagicHelper',
  components: {
    CommentBubble,
  },
  data: () => ({
    dragging: false,
    downPos: null,
    upPos: null,
    commentPostions: [],

    showButton: true,
    showDialog: false,
  }),
  methods: {
    close() {
      this.showDialog = false;
      this.showButton = true;
      this.commentPostions = null;
      while (this.$refs.capture.hasChildNodes()) {
        this.$refs.capture.removeChild(this.$refs.capture.childNodes[0]);
      }
    },
    startup() {
      this.showButton = false;

      setTimeout(async () => {
        const orig = await html2canvas(document.body);
        const canvas = document.createElement('canvas'); // await html2canvas(document.body);
        canvas.width = window.innerWidth * 0.8 - 50;
        canvas.height = window.innerHeight * 0.8 - 40;
        const ctx = canvas.getContext('2d');
        this.$refs.capture.appendChild(canvas);

        this.showDialog = true;

        ctx.drawImage(orig, 0, 0, canvas.width, canvas.height);

        canvas.addEventListener('mousedown', (e) => {
          this.downPos = [e.x, e.y];
          this.dragging = true;
        });
        canvas.addEventListener('mouseup', (e) => {
          this.upPos = [e.x, e.y];

          if (this.dragging && this.commentPostions.length === 0) {
            this.commentPostions.push([
              (e.x + this.downPos[0]) / 2 - 100,
              Math.max(e.y, this.downPos[1]) + 15,
            ]);
          }

          this.dragging = false;
        });
        canvas.addEventListener('mousemove', (e) => {
          if (this.dragging) {
            // console.log(e.x, e.y);
            ctx.drawImage(orig, 0, 0, canvas.width, canvas.height);
            // ctx.fillStyle = '#FF0000';
            ctx.strokeStyle = '#FF0000';
            ctx.strokeRect(
              this.downPos[0] - 170,
              this.downPos[1] - 94,
              e.x - this.downPos[0],
              e.y - this.downPos[1],
            );
          }
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  position: fixed
  top: 100px
  right: 100px
  width: 200px
  height: 200px
  z-index: 900
  // background-color: gray

.btn
  position: fixed
  right: 10px
  bottom: 20px

.card
  position: fixed
  top: 10%
  left: 10%
  right: 10%
  bottom: 10%
  padding: 20px
  padding-bottom: 60px
  background-color: rgba(255,255,255,1)
  &&::before
    z-index: -3
    content: ""
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color: rgba(0,0,0,0.05)

.capture
  width: 100% !important
  height: 100% !important
</style>
