<template>
  <div class="body">
    <a class="button" v-for="i in 3" :key="i" @click="scrollToSection(i)">sec{{ i }}</a>
    <section class="sec1">　　　　　　　　　　this is section 1</section>
    <section class="sec2">　　　　　　　　　　this is section 2</section>
    <section class="sec3">　　　　　　　　　　this is section 3</section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap, Elastic } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default defineComponent({
  name: 'ScrollTo',

  setup(props, context) {
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('mountedEvent', true);
    });

    // ナビゲータ表示通知
    onUnmounted(() => context.emit('mountedEvent', false));

    const scrollToSection = (i: number) => gsap.to(window, {duration: 1, scrollTo: { y: `.sec${i}` }, ease: Elastic.easeOut});

    return { scrollToSection }
  },
});
</script>

<style scoped>
  .body {
    width: 100%;
  }
  .button {
    position: fixed;
    background-color: white;
    padding: 0.5rem;
    border-radius: 10%
  }
  .button:nth-child(2) {
    left: 50px;
  }
  .button:nth-child(3) {
    left: 100px;
  }
  .sec1 {
    height: 50vh;
    background-color: #dddddd;
  }
  .sec2 {
    height: 100vh;
    background-color: #cccccc;
  }
  .sec3 {
    height: 150vh;
    background-color: #bbbbbb;
  }
</style>