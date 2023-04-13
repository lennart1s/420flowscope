<template>
  <div class="wrapper">
    <p>Deine Mudd</p>
    <div ref="capture" class="capture"></div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: 'MagicHelper',
  components: {
  },
  data: () => ({
    dragging: false,
    downPos: null,
    upPos: null,
  }),
  async mounted() {
    const orig = await html2canvas(document.body);
    const canvas = await html2canvas(document.body);
    const ctx = canvas.getContext('2d');
    this.$refs.capture.appendChild(canvas);
    // document.body.appendChild(canvas);

    canvas.addEventListener('mousedown', (e) => {
      this.downPos = [e.x, e.y];
      this.dragging = true;
    });
    canvas.addEventListener('mouseup', (e) => {
      this.upPos = [e.x, e.y];
      this.dragging = false;
    });
    canvas.addEventListener('mousemove', (e) => {
      if (this.dragging) {
        // console.log(e.x, e.y);
        ctx.drawImage(orig, 0, 0, window.innerWidth, window.innerHeight);
        // ctx.fillStyle = '#FF0000';
        ctx.strokeRect(
          this.downPos[0],
          this.downPos[1],
          e.x - this.downPos[0],
          e.y - this.downPos[1],
        );
      }
    });
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

  background-color: red

.capture
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
</style>
