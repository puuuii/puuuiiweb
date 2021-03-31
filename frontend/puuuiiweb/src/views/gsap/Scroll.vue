<template>
  <div class="gsap-scroll-body">

    <section class="parallax">
      <div class="layer l1" data-depth="0.2"></div>
      <div class="layer l2" data-depth="0.4"></div>
      <div class="layer l3" data-depth="0.6"></div>
      <div class="layer l4" data-depth="0.8"></div>
      <div class="layer l5" data-depth="1"></div>
    </section>

    <section class="pinned-progressbar">
      <div class="container">
        <div class="progressbar"></div>
        <p>Progress with scrolling.</p>
      </div>
    </section>

    <section class="horizontal">
      <div class="panel" v-for="i in count_horiz_item" :key="i">{{ i }}</div>
    </section>

    <section class="lazy">

    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: 'Scroll',

  setup(props, context) {
    // 変数定義
    const count_horiz_item = 3;
    onMounted(() => {

      // parallax定義
      const tl_para = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax",
          start: "top top", end: "bottom top",
          scrub: true
        }
      });
      gsap.utils.toArray(".layer").forEach(layer => {
	      tl_para.to(".layer", {yPercent: -200, ease: "none"}, 0)
      });

      // progress bar定義
      gsap.from(".progressbar", {
        scrollTrigger: {
          trigger: ".pinned-progressbar",
          start: "top top", end: "+200%",
          scrub: true,
          pin: true
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
      })

      // horizontal定義
      const body_width = document.querySelector<HTMLElement>(".gsap-scroll-body")!.offsetWidth;
      const horiz_width = document.querySelector<HTMLElement>(".horizontal")!.offsetWidth;
      gsap.to(".horizontal", {
          scrollTrigger: {
            trigger: ".horizontal",
            start: "top top",
            end: () => "+=" + (horiz_width - body_width),
            scrub: true,
            pin: true,
            snap: 1 / (count_horiz_item-1)
          },
          xPercent: -100,
          x: "+=" + body_width,
          ease: "none"
      })
    });


    return { count_horiz_item }
  },

});
</script>

<style scoped>
  .gsap-scroll-body {
    background-color: #28282c;
    height: auto;
    overflow-x: hidden;
  }
  .parallax {
    height: 100vh;
    position: relative;
    z-index: 1;
  }
  .layer {
    position: fixed;
    background-color: #2673B8;
    border-radius: 50%;
  }
  .l1 {
    width: 50%;
    height: 40%;
    bottom: 0;
    right: 0;
    opacity: 0.2;
  }
  .l2 {
    width: 40%;
    height: 20%;
    bottom: 50%;
    right: 20%;
    opacity: 0.4;
  }
  .l3 {
    width: 30%;
    height: 15%;
    top: 40%;
    left: 10%;
    opacity: 0.6;
  }
  .l4 {
    width: 20%;
    height: 10%;
    bottom: 30%;
    left: 10%;
    opacity: 0.8;
  }
  .l5 {
    width: 10%;
    height: 5%;
    top: 20%;
    right: 30;
    opacity: 1;
  }
  .pinned-progressbar {
    height: 100vh;
    background-color: #222;
    position: relative;
    z-index: 2;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .pinned-progressbar > .container {
    width: 80%;
  }
  .progressbar {
    background-color: lightgray;
    height: 1rem;
    border-radius: 1rem;
  }
  .pinned-progressbar > .container > p {
    text-align: center;
  }
  .horizontal {
    width: 300%;
    height: 100vh;
    background-color: #111;
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    }
  .panel {
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #111;
    border: 1px solid lightgray;
    flex: auto;
  }
  .lazy {
    height: 100vh;
    position: relative;
    z-index: 2;
    background-color: #080808;
  }
</style>