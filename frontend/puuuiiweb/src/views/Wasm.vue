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
    onUnmounted(() => {
      console.log('unmount!');
      document.getElementById('wasm body')
    });

    return { }
  }
});
</script>

<style scoped>
</style>