<template>
  <div class="circle"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'Circle',

  setup(props, context) {
    onMounted(() => {
      // ナビゲータ非表示通知
      context.emit('showNavEvent', false);

      gsap.to('.circle', {x: 500, duration: 3})
    }),

    // ナビゲータ表示通知
    onUnmounted(() => context.emit('showNavEvent', true));
  }
});
</script>

<style scoped>
  .circle{
    background-color:red;
    height: 5em;
    width: 5em;
    border-radius: 100%
  }
</style>