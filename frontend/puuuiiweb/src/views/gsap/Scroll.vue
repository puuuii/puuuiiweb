<template>
  <div class="body">
    <h1>
      scroll Down!!
    </h1>
    <div class="scroll">
      <div class="box"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: 'Scroll',

  setup(props, context) {
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('mountedEvent', true);

      // アニメーション定義
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          markers: true
        }
      });

      tl.to(".box", {y: "400px", duration: 3});
      tl.to(".box", {rotation: 360, duration: 2});
      tl.to(".box", {x: "400px", duration: 1});
    });

    // ナビゲータ表示通知
    onUnmounted(() => {
      context.emit('mountedEvent', false)
    });

    return { }
  },

  methods: {
    setAnimation(): void {

    }
  }
});
</script>

<style scoped>
  .body {
    height: 350vh;
  }
  .scroll {
    position: absolute;
    top: 150vh;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: lightgray;
    padding: 20px;
  }
  .box {
    background-color: black;
    width: 10vw;
    height: 10vw;
  }
</style>