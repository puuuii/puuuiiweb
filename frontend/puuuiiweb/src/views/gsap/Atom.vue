<template>
  <div class="gsap-atom-body">
    <div class="atom" :style="styleAtomLength">
      <div class="orbit">
        <div class="path">
          <div class="electron" :style="styleElectronLength"></div>
        </div>
      </div>
      <div class="orbit">
        <div class="path">
          <div class="electron" :style="styleElectronLength"></div>
        </div>
      </div>
      <div class="orbit">
        <div class="path">
          <div class="electron" :style="styleElectronLength"></div>
        </div>
      </div>
      <div class="orbit">
        <div class="path">
          <div class="electron" :style="styleElectronLength"></div>
        </div>
      </div>
      <div class="nucleus" :style="styleNucleusLength"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'Atom',

  setup(props, context) {
    // 各種スタイル定義
    const atomLength = Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth);
    const styleAtomLength = {height: `${atomLength}px`, width: `${atomLength}px`, left: `${document.documentElement.clientWidth/2 - atomLength/2}px`};
    const nucleusLength = atomLength/15;
    const styleNucleusLength = {height: `${nucleusLength}px`, width: `${nucleusLength}px`};
    const electronLength = atomLength/20;
    const styleElectronLength = {height: `${electronLength}px`, width: `${electronLength}px`, top: `-${electronLength/2}px`, left: `${atomLength/2 - electronLength/2}px`};

    let tween: GSAPAnimation;
    onMounted(() => {
      // アニメーション定義
      const tl = gsap.timeline(),
            atom = document.querySelector('.atom'),
            dur = 2,
            del = 0.5;

      const e = tl.fromTo('.electron', {rotationX: 90}, {
        rotationZ: -360,
        rotationX: 90,
        ease: 'none',
        duration: dur,
        stagger: {
          each: -del,
          repeat: -1
        }
      }, 0);

      const p = tl.to('.path', {
        rotationZ: 360,
        ease: 'none',
        duration: dur,
        stagger: {
          each: -del,
          repeat: -1
        }
      }, 0);

      gsap.to(atom, {rotation: 360, ease: "none", repeat: -1, duration: 300});

      // Skip the loading
      tl.progress(0.9999);

      const timeScaleTween = gsap.to(tl, {
        duration: 0.75,
        timeScale: 0.1,
        paused: true
      });

      // Slow the animation on mouse enter
      if (atom) {
        atom.addEventListener("mouseenter", function() {
          timeScaleTween.play();
        });
        // Set the animation back to normal on mouse leave
        atom.addEventListener("mouseleave", function() {
          timeScaleTween.reverse();
        });
      }
    })

    return { styleAtomLength, styleNucleusLength, styleElectronLength }
  }
});
</script>

<style scoped>
  .gsap-atom-body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .bodyx::-webkit-scrollbar {
    display:none;
  }
  .atom {
    position: fixed;
    left: 50%;
    transform-style: preserve-3d;
  }
  .nucleus  {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    background: #8EE3C8;
  }
  .orbit {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid #2673B8;
    transform-style: preserve-3d;
    transform: rotateX(80deg) rotateY(20deg);
  }
  .orbit:nth-child(2) {
    transform: rotateX(80deg) rotateY(70deg);
  }
  .orbit:nth-child(3) {
    transform: rotateX(80deg) rotateY(-20deg);
  }
  .orbit:nth-child(4) {
    transform: rotateX(80deg) rotateY(-50deg);
  }
  .path {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
  }
  .electron {
    position: fixed;
    border-radius: 50%;
    background: #2673B8;
    transform: rotateX(-80deg) rotateY(-20deg);
  }
  .electron:nth-child(2) {
    transform: rotateX(-80deg) rotateY(-70deg);
  }
  .electron:nth-child(3) {
    transform: rotateX(-80deg) rotateY(20deg);
  }
  .electron:nth-child(4) {
    transform: rotateX(-80deg) rotateY(50deg);
  }
</style>