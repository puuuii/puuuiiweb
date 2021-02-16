<template>
  <div id="particleContainer" class="body">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'Particle',

  setup(props, context) {
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('mountedEvent', true);

      // アニメーション定義
      const body = document.getElementById('particleContainer');
      const vw = body ? body.offsetWidth : 0;
      const vh = body ? body.offsetHeight : 0;
      const count = 20;
      const random = gsap.utils.random;
      const offsetY = 100;

      for (let i=0; i<count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        if (body) body.appendChild(particle);
        const scale = random(1, 50);

        particle.style.position = 'fixed';
        particle.style.height = '10px';
        particle.style.width = '10px';
        particle.style.backgroundColor = 'white';
        particle.style.bottom = '0';
        particle.style.borderRadius = '50%';
        particle.style.filter = `blur(${scale/50}px)`;

        gsap.set(particle, {x: random(0, vw), scale: random(0.5, 1.5), opacity: 0.5});
        gsap.to(particle, {x: `+=${random(-vw/5, vw/5)}`, ease: 'power1.inOut', duration: random(1,4), repeat: -1, yoyo: true});
        gsap.to(particle, {y: `+=${-random(vh*0.5, vh)-offsetY}`, ease: 'power1.inOut', opacity: 0, duration: random(5, 10), repeat: -1});
      }
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
    width: 100%;
    height: 100vh;
    background-color: rgb(0,28,28);
    color: rgb(200,200,200);
  }
</style>