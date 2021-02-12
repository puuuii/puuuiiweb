<template>
  <div class="body">
    <div id="nav" v-show="navShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/gsap">Gsap</router-link>
    </div>
    <router-view @showNavEvent="showNav"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'App',

  setup() {
    let navShow = ref<boolean>(true);

    // ナビゲーター表示制御
    const showNav = (show: boolean) => navShow.value = show;

    onUnmounted(() => {
      console.log('aaa')
    });

    return { navShow, showNav }
  }
});
</script>

<style>
</style>
