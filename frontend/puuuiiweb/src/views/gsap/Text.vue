<template>
  <div class="body">
    <div class="text1"></div>
    <div class="text2"></div>
    <div class="text3"></div>
    <div class="text4">This is the new text !!</div>
    <div class="text5">.................... !!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default defineComponent({
  name: 'Text',

  setup(props, context) {
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('mountedEvent', true);

      // アニメーション定義
      gsap.to(".text1", {duration: 1, text: "This is the new text !!", ease: "power3.out"});
      gsap.to(".text2", {duration: 1, text: {value: "This is the new text !!", delimiter: " "}, ease: "power1.out"});
      gsap.to(".text3", {text: {value: "This is the new text !!", speed: 5}});
      gsap.from(".text4", {duration: 2, text: ""});
      gsap.to(".text5", {duration: 2, text: "This is the new text !!"});
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