<template>
  <div>
    <nav>
      <router-link to="/gsap/tutorial">Tutorial</router-link> |
      <router-link to="/gsap/atom">Atom</router-link> |
      <router-link to="/gsap/scroll">Scroll</router-link> |
      <router-link to="/gsap/draggable">Draggable</router-link> |
      <router-link to="/gsap/pixi">Pixi</router-link> |
      <router-link to="/gsap/text">Text</router-link> |
      <router-link to="/gsap/scrollto">ScrollTo</router-link> |
      <router-link to="/gsap/particle">Particle</router-link>
    </nav>
    <router-view class="router-view" @mountedEvent="onGsapMounted"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { gsap } from "gsap";

export default defineComponent({
  name: 'Gsap',

  setup(props, context) {
    // ナビゲータ表示制御
    const onGsapMounted = (isMounted: boolean) => {
      // 全てのアニメーションを削除
      if (!isMounted) {
        gsap.globalTimeline.clear(true);

        // マーカーは個々消していく
        const classNames = ['gsap-marker-start', 'gsap-marker-scroller-start', 'gsap-marker-end', 'gsap-marker-scroller-end'];
        classNames.forEach(name => {
          const items = Array.from(document.getElementsByClassName(name));
          items.forEach(item => { if (item.parentNode) { item.parentNode.removeChild(item) }});
        })
      }
    };

    return { onGsapMounted }
  }
});
</script>

<style scoped>
</style>