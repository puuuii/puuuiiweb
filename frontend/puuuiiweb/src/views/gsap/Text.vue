<template>
  <div class="gsap-text-body">

    <section class="basic">
      <div class="basic-text1"></div>
      <div class="basic-text2"></div>
      <div class="basic-text3"></div>
      <div class="basic-text4">This is the new text !!</div>
      <div class="basic-text5">.................... !!</div>
    </section>

    <section class="advanced">
      <p class="split-container">
        <span class="split" v-for="(c,i) in text" :key="i">{{ c }}</span>
      </p>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap, Back } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default defineComponent({
  name: 'Text',

  setup(props, context) {
    // 変数定義
    const rem2px = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const text = "これはスプリッドアニメーションの実装例です。"

    onMounted(() => {
      // アニメーション定義
      gsap.to(".basic-text1", {duration: 1, text: "This is the new text !!", ease: "power3.out"});
      gsap.to(".basic-text2", {duration: 1, text: {value: "This is the new text !!", delimiter: " "}, ease: "power1.out"});
      gsap.to(".basic-text3", {text: {value: "This is the new text !!", speed: 5}});
      gsap.from(".basic-text4", {duration: 2, text: ""});
      gsap.to(".basic-text5", {duration: 2, text: "This is the new text !!"});

      gsap.timeline({defaults: {duration: 0.8, stagger: 0.02, ease: Back.easeInOut.config(rem2px(1))}})
        .from(".split", {y: rem2px(1), ease: Back.easeInOut.config(rem2px(1))})
        .from(".split", {yPercent: -300 , ease: "power3.inOut"}, "<")
        .from(".split", {scale: 0}, "<")
        .from(".split", {alpha: 0, ease: "power2.in"}, "<");
    });

    return { text }
  },

});
</script>

<style scoped>
  .split-container {
    display:flex;
    align-items:center;
    justify-content:center;
  }
</style>