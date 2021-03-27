<template>
  <div class="nav_body">
    <nav>
      <router-link :to=LinkMappings[0].url>{{ LinkMappings[0].label }}</router-link>
      <span v-for="i in space_total" :key="i">&nbsp;</span>
      <router-link :to=LinkMappings[1].url>{{ LinkMappings[1].label }}</router-link>
      <span v-for="i in space_total" :key="i">&nbsp;</span>
      <router-link :to=LinkMappings[2].url>{{ LinkMappings[2].label }}</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import 'uikit/dist/css/uikit.min.css'
import { defineComponent, } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',

  setup() {
    // 変数定義
    const router = useRouter();
    const LinkMappings = [
      {label: 'TOP', url: '/'},
      {label: 'GSAP', url: '/gsap'},
      {label: 'WASM', url: '/wasm'},
    ];
    const space_total = 5;

    // メソッド定義
    const transitionTo = (url: string) => router.push(url);

    return { LinkMappings, transitionTo, space_total }
  }
});
</script>

<style>
body {
  background-color: #28282c;
  width: 100%;
}
a:link, a:visited, a:hover, a:active { color: lightgray; }
nav {
  position: fixed;
  width: 100%;
  text-align: center;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
  background: rgba(0, 0, 0, 0);
}
.uk-navbar-nav>li.uk-active>a {
  color: lightgray;
}
</style>
