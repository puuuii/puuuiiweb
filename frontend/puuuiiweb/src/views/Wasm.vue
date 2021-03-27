<template>
  <div id="wasm body">
    <nav>
      <router-link to="/wasm/highlow">High&Low</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Wasm',

  setup(props, context) {
    // アンマウント時にキャンバスを削除
    onUnmounted(() => {
      const canvases = document.getElementsByTagName('canvas');
      for (let canvas of canvases as any) {
        if (!canvas || !canvas.parentNode) return;
        canvas.parentNode.removeChild(canvas);
      }
    });

    return { }
  }
});
</script>

<style scoped>
</style>