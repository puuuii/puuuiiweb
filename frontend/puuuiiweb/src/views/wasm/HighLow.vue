<template>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import init from './highlow/wasm.js';

export default defineComponent({
  name: 'HighLow',

  setup(props, context) {
    onMounted(() => {
      init();
    });

    // アンマウント時にキャンバスを削除
    onUnmounted(() => {
      const canvases = document.getElementsByTagName('canvas');
      for (let canvas of canvases as any) {
        if (!canvas || !canvas.parentNode) return;
        canvas.parentNode.removeChild(canvas);
      }
    });

    return { }
  },
});
</script>

<style scoped>
</style>