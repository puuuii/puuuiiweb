<template>
  <div class="gsap-css-body">
    <div class="container">
      <h1>This is h1 in container.</h1>
      <h2>It's h2.</h2>
      <p>This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.</p>
      <p>This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.</p>
      <button>button</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'Css',

  setup(props, context) {
    onMounted(() => {
      // アニメーション定義
      gsap.to(".gsap-css-body",{
        "--r": 38, "--g": 115, "--b": 184,
        ease: "power1.inOut", duration: 1, yoyo: true, repeat: -1
      })
    });

    return { }
  },
});
</script>

<style scoped>
  .gsap-css-body {
    --r: 211;
    --g: 211;
    --b: 211;
    --myColor: rgb(var(--r), var(--g), var(--b));
    padding: 5rem;
  }
  .container {
    width: 100%;
    height: 100%;
    padding: 3rem;
    border: medium solid var(--myColor);
    border-radius: 2rem;
  }
  h1, h2, p {
    color: var(--myColor);
  }
  button {
    color: var(--myColor);
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid var(--myColor);
    padding: 1rem;
  }
</style>