<template>
</template>

<script lang="ts">
import { defineComponent, onMounted, } from 'vue';
import init from './highlow/wasm.js';

export default defineComponent({
  name: 'HighLow',

  setup(props, context) {
    onMounted(() => {
      init();
    });

    return { }
  },
});
</script>

<style scoped>
</style>