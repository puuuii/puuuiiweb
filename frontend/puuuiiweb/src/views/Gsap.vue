<template>
  <div>
    <div id="gsapNav" v-show="navShow">
      <router-link to="/gsap/tutorial">Tutorial</router-link> |
      <router-link to="/gsap/atom">Atom</router-link> |
      <router-link to="/gsap/scroll">Scroll</router-link> |
      <router-link to="/gsap/draggable">Draggable</router-link>
    </div>
    <router-view @showNavEvent="showNav"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Gsap',

  setup(props, context) {
    let navShow = ref<boolean>(true);

    // ナビゲータ表示制御
    const showNav = (show: boolean) => {
      context.emit('showNavEvent', show);
      navShow.value = show;
    };

    return { navShow, showNav }
  }
});
</script>

<style scoped>
</style>