<template>
<div class="uk-child-width-1-2 uk-child-width-1-3@m uk-grid-small uk-grid-match uk-position-center" uk-grid>
  <div v-for="(map,i) in LinkMappings" class="uk-card uk-card-default uk-card-body" @click="transitionTo(map.url)" :key="i">
    <h3 class="uk-card-title link-label">{{ map.label }}</h3>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
  },

  setup(props, context) {
    // 変数定義
    const router = useRouter();
    const LinkMappings = [
      {label: 'GSAP', url: 'gsap'},
      {label: 'Menu2', url: ''},
      {label: 'Menu3', url: ''},
      {label: 'Menu4', url: ''},
    ];

    // メソッド定義
    const transitionTo = (url: string) => router.push(url);

    return { LinkMappings, transitionTo }
  }
});
</script>

<style scoped>
  .link-label {
    text-align: center;
  }
</style>