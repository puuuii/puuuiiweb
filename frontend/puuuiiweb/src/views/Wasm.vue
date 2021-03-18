<template>
  <div class="body">
    <router-link to="/wasm/highlow">High&Low</router-link> |
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Wasm',

  setup(props, context) {
    onMounted(() => {
    });

    return {  }
  }
});
</script>

<style scoped>
</style>