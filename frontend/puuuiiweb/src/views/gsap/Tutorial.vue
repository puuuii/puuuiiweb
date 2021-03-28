<template>
  <div class="gsap-tutorial-body">
    <div class="obj circle"></div>
    <div class="obj square"></div>
    <div class="obj triangle"></div>
    <div class="obj square2"></div>
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
        .to('.square2', {y: 0});
      gsap.to('.circles', {
        y: body_height - obj_height,
        duration: 4, ease: Bounce.easeOut,
        stagger: {
          each: 0.2, from: "start"
        }
      })
    });
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
</style>