<template>
  <div>
    <div class="circle"></div>
    <br>
    <div class="square"></div>
    <br>
    <div class="triangle"></div>
    <br>
    <div class="roundsquare1"></div>
    <div class="roundsquare2"></div>
    <div class="roundsquare3"></div>
    <br>
    <div class="pursquqre1"></div>
    <div class="pursquqre2"></div>
    <div class="pursquqre3"></div>
    <br>
    <div v-for="i in 5" :key="i" class="stagger"></div>
    <br>
    <div class="commandSquare"></div>
    <button @click="play">play</button>
    <button @click="pause">pause</button>
    <button @click="reverse">reverse</button>
    <button @click="seek(0.5)">seek</button>
    <button @click="progress">progress</button>
    <button @click="timeScale(0.5)">timeScale0.5</button>
    <button @click="timeScale(2)">timeScale2</button>
    <button @click="restart">restart</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'Tutorial',

  setup(props, context) {
    let tween: GSAPAnimation;
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('showNavEvent', false);

      // アニメーション定義
      gsap.to('.circle', {x: 500, duration: 0.5, yoyo: true, repeat: -1, onRepeat: ()=>console.log('onRepeat!')});
      gsap.from('.square', {duration:4, scale: 2, onComplete: (msg)=>console.log(msg), onCompleteParams: ["done!"]});
      gsap.fromTo('.triangle', {opacity: 0}, {opacity: 1, x: 100, duration: 2});
      gsap.to('.roundsquare1', {x:500, ease:"power2.in", duration: 2});
      gsap.to('.roundsquare2', {x:500, ease:"power2.inout", duration: 2});
      gsap.to('.roundsquare3', {x:500, ease:"power2.out", duration: 2});
      gsap.timeline({defaults: {x: 300, duration: 1}})
        .to('.pursquqre1', {ease:"bounce.in"})
        .to('.pursquqre2', {ease:"bounce.out"}, '-=0.5')
        .to('.pursquqre3', {x: 400, ease:"bounce.inOut"}, '<0.5');
      gsap.to('.stagger', {duration: 0.5, stagger: 0.2, x: 500});
      tween = gsap.to('.commandSquare', {x: 500, duration: 3, paused: true});
    });

    onUnmounted(() => {
      // ナビゲータ表示通知
      context.emit('showNavEvent', true);

      // 全てのアニメーションを削除
      gsap.globalTimeline.clear();
    });

    // 関数定義
    const play = () => tween.play();
    const pause = () => tween.pause();
    const reverse = () => tween.reverse();
    const seek = (n: number) => tween.seek(n);
    const progress = () => tween.progress();
    const timeScale = (scale: number) => tween.timeScale(scale);
    const restart = () => tween.restart();

    return { play, pause, reverse, seek, progress, timeScale, restart }
  }
});
</script>

<style scoped>
  .circle, .stagger{
    background-color:red;
    height: 5em;
    width: 5em;
    border-radius: 100%
  }

  .square, .commandSquare{
    background-color: blue;
    height: 5em;
    width: 5em;
  }

  .triangle{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50px 86.6px 50px;
    border-color: transparent transparent green transparent;
  }

  .roundsquare1, .roundsquare2, .roundsquare3{
    background-color:orange;
    height: 5em;
    width: 5em;
    border-radius: 20%
  }

  .pursquqre1, .pursquqre2, .pursquqre3{
    background-color: purple;
    height: 5em;
    width: 5em;
  }
</style>