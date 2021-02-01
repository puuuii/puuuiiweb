<template>
  <div>
    <div id="nav" v-show="navShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/gsap">Gsap</router-link>
    </div>
    <router-view @showNavEvent="showNav"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
