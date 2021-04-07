<template>
  <div class="gsap-draggable-body">
    <div class="spinner"></div>
    <div class="mover"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable);

export default defineComponent({
  name: 'Draggable',

  setup(props, context) {
    onMounted(() => {
      // 位置移動オブジェクトのアニメーション設定
      Draggable.create(".mover", {
        bounds: ".gsap-draggable-body",
        throwProps: true,
        onDragEnd: function() { gsap.to('.spinner', { x: this.x, y: this.y, duration: 0.3, ease:"power4.inOut" }) }
      });

      // 回転オブジェクトのアニメーション設定
      Draggable.create(".spinner", {
        type: "rotation",
      })

    });

    return { }
  },
});
</script>

<style scoped>
  .gsap-draggable-body {
  }
  .spinner {
    position: fixed;
    width: 10rem;
    height: 10rem;
    background-color: #2673B8;
  }
  .mover {
    position: fixed;
    width: 5rem;
    height: 5rem;
    margin: 2.5rem;
    border-radius: 50%;
    background-color: #8EE3C8;
  }
</style>