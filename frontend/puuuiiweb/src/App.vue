<template>
  <div class="body">
    <div id="nav" v-show="navShow">
    </div>
    <router-view @showNavEvent="showNav"/>
  </div>
</template>

<script lang="ts">
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import 'uikit/dist/css/uikit.min.css'
import { defineComponent, ref, onUnmounted } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    let navShow = ref<boolean>(true);

    // ナビゲーター表示制御
    const showNav = (show: boolean) => navShow.value = show;

    return { navShow, showNav }
  }
});
</script>

<style>
</style>
