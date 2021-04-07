<template>
  <div class="gsap-scrollto-body">
    <div class="buttons">
      <a class="button" @click="scrollToTop()">top</a>
      <a class="button" v-for="i in 3" :key="i" @click="scrollToSection(i)">sec{{ i }}</a>
    </div>
    <section class="sec1">this is section 1</section>
    <section class="sec2">this is section 2</section>
    <section class="sec3">this is section 3</section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gsap, Elastic } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default defineComponent({
  name: 'ScrollTo',

  setup(props, context) {
    const scrollToTop = (i: number) => gsap.to(window, {duration: 1, scrollTo: { y: 0 }, ease: "power3.inOut"});
    const scrollToSection = (i: number) => gsap.to(window, {duration: 1, scrollTo: { y: `.sec${i}` }, ease: Elastic.easeOut});

    return { scrollToTop, scrollToSection }
  },
});
</script>

<style scoped>
  .gsap-scrollto-body {
    width: 100%;
    height: 300vh;
  }
  .buttons {
    width: 100%;
    position: fixed;
    display:flex;
    justify-content:center;
  }
  .button {
    padding: 0.5rem 2rem;
    margin: 0.1rem;
    border: 1px solid lightgray;
    color: lightgray;
    border-radius: 0.5rem;
  }
  .button:nth-child(2) {
    left: 50px;
  }
  .button:nth-child(3) {
    left: 100px;
  }
  section {
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .sec1 {
    background-color: #222;
  }
  .sec2 {
    background-color: #28282c;;
  }
  .sec3 {
    background-color: #222;
  }
</style>