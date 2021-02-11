<template>
  <div class="body">
    <div class="box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable);

export default defineComponent({
  name: 'Draggable',

  setup(props, context) {
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('mountedEvent', true);

      // アニメーション定義
      Draggable.create(".box", {
        bounds: ".body",
        throwProps: true
      });
    });

    // ナビゲータ表示通知
    onUnmounted(() => context.emit('mountedEvent', false));

    return { }
  },
});
</script>

<style scoped>
  .body {
    background-color: gray;
    width: 100%;
    height: 100vh;
  }
  .box {
    background-color: lightgray;
    width: 10rem;
    height: 10rem;
    border-radius: 25%;
  }
</style>