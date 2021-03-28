<template>
  <div class="gsap-tutorial-body">

    <div class="obj circle"></div>
    <div class="obj square"></div>
    <div class="obj triangle"></div>
    <div class="obj square2"></div>

    <div class="command">
      <div class="obj square3"></div>
      <button class="commands uk-button uk-button-default" type="button">Commands</button>
      <div uk-dropdown>
          <ul class="uk-nav uk-dropdown-nav">
            <li><button class="uk-button uk-button-text" @click="play">play</button></li>
            <li><button class="uk-button uk-button-text" @click="pause">pause</button></li>
            <li><button class="uk-button uk-button-text" @click="reverse">reverse</button></li>
            <li><button class="uk-button uk-button-text" @click="seek(0.5)">seek</button></li>
            <li><button class="uk-button uk-button-text" @click="progress">progress</button></li>
            <li><button class="uk-button uk-button-text" @click="timeScale(0.5)">timeScale0.5</button></li>
            <li><button class="uk-button uk-button-text" @click="timeScale(2)">timeScale2</button></li>
            <li><button class="uk-button uk-button-text" @click="restart">restart</button></li>
          </ul>
      </div>
    </div>

    <div class="uk-flex uk-flex-center">
      <div class="uk-card uk-card-default uk-card-body circles"></div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-left circles" v-for="i in 8" :key="i"></div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap, Bounce } from "gsap";

export default defineComponent({
  name: 'Tutorial',

  setup(props, context) {
    // 変数定義
    let tween: GSAPAnimation;

    // 関数定義
    const rem2px = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const play = () => tween.play();
    const pause = () => tween.pause();
    const reverse = () => tween.reverse();
    const seek = (n: number) => tween.seek(n);
    const progress = () => tween.progress();
    const timeScale = (scale: number) => tween.timeScale(scale);
    const restart = () => tween.restart();

    onMounted(() => {
      const body_width = document.documentElement.clientWidth;
      const body_height = document.getElementsByClassName('gsap-tutorial-body')[0].clientHeight;
      const obj_width = rem2px(5);
      const obj_height = rem2px(5);

      // アニメーション定義
      gsap.to('.circle', {
        x: body_width - obj_width*2.5, y: body_height - obj_height*2.5, scale: 4,
        duration: 1, yoyo: true, repeat: -1,
        onRepeat: () => console.log('onRepeat!'),
      });
      gsap.from('.square', {
        x: body_width - obj_width*1.5, scale: 2, ease: "power4.inout",
        duration:4,
        onComplete: (msg) => console.log(msg), onCompleteParams: ["done!!!"]
      });
      gsap.fromTo('.triangle',
        {opacity: 0},
        {opacity: 1, x: (body_width - obj_width)/2, y: (body_height - obj_height)/2, duration: 2}
      );
      gsap.timeline({defaults: {duration: 1, ease: "power4.inout"}})
        .to('.square2', {x: body_width - obj_width})
        .to('.square2', {y: body_height - obj_height}, '-=0.5')
        .to('.square2', {x: 0}, '>0.5')
        .to('.square2', {y: 0})
        .repeat(-1);
      gsap.to('.circles', {
        y: body_height - obj_height,
        duration: 4, ease: Bounce.easeOut, repeat: -1,
        stagger: {
          each: 0.2, from: "center"
        }
      })
      tween = gsap.to('.square3', {x: body_width - obj_width, duration: 3, paused: true});
    });

    return {play, pause, reverse, seek, progress, timeScale, restart}
  }
});
</script>

<style scoped>
  .gsap_tutorial_body {
    width: 100%;
    height: 100%;
  }
  .obj {
    position: absolute;
    background-color: #2673B8;
    width: 5rem;
    height: 5rem;
  }
  .circle {
    border-radius: 100%
  }
  .triangle{
    background-color: rgba(0, 0, 0, 0);
    border-style: solid;
    border-width: 0 2.5rem 5rem 2.5rem;
    border-color: transparent transparent #2673B8 transparent;
  }
  .circles {
    border-radius: 100%;
    background-color: #8EE3C8;
  }
  .square2 {
    background-color: #8EE3C8;
  }
  .command {
    position: absolute;
    bottom: 0;
  }
  .square3 {
    position: relative;
    background-color: lightgray;
  }
  .commands {
    color: lightgray
  }
</style>