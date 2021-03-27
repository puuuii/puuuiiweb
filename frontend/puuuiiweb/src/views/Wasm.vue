<template>
  <div id="wasm body">
    <nav>
      <router-link to="/wasm/highlow">High&Low</router-link>
    </nav>
    <router-view class="router-view"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Wasm',

  setup(props, context) {
    return { }
  }
});
</script>

<style scoped>
</style>