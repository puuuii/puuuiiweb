<template>
  <div class="gsap-particle-body">
    <div class="particle-container">
      <div class="particle" v-for="i in particle_count" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export default defineComponent({
  name: 'Particle',

  setup(props, context) {
    // 変数定義
    const particle_count = 30;

    // 関数定義
    const rem2px = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const obj_width = rem2px(1);

    onMounted(() => {
      const body_width = document.documentElement.clientWidth;
      const body_height = document.getElementsByClassName('gsap-particle-body')[0].clientHeight;
      const gap = (body_width - obj_width) / (particle_count - 1);
      const particles = document.getElementsByClassName('particle');

      // アニメーション定義
      for (let i=0; i<particle_count; i++) {
        const particle = particles[i];
        const x = gap*i;
        const move_length = gsap.utils.random(0, body_width/particle_count);
        const scale = gsap.utils.random(0.01, 2);
        const opacity = gsap.utils.random(0.01, 1);
        const delay = gsap.utils.random(0, -10);
        const duration_x = gsap.utils.random(1, 5);
        const duration_y = gsap.utils.random(3, 10);
        const ease = scale >= 1.5 ? Power1
                   : scale >= 1.0 ? Power2
                   : scale >= 0.5 ? Power3
                   :                Power4;

        // 初期設定位置
        gsap.to(particle, {x: x-move_length, scale: scale, opacity: opacity, duration: 0});

        // x移動
        gsap.timeline({defaults: {duration: duration_x, ease: ease.easeInOut}})
          .to(particle, {x: x+move_length})
          .to(particle, {x: x-move_length})
          .repeat(-1)
          .delay(delay);

        // y移動
        gsap.to(particle, {
          y: -(body_height - obj_width), opacity: 0,  duration: duration_y, ease: ease.easeIn, repeat: -1
        })
        .delay(delay);
      }
    });

    return { particle_count }
  },
});
</script>

<style scoped>
  .gsap-particle-body {
  }
  .particle-container {
    width: 100%;
  }
  .particle {
    position: fixed;
    width: 1rem;
    height: 1rem;
    transform: translate(0, 100%);
    bottom: 0;
    background-color: #2673B8;
    border-radius: 50%;
  }
</style>