<template>
  <div class="nav_body">
    <nav>
      <router-link :to=LinkMappings[0].url>{{ LinkMappings[0].label }}</router-link>
      <span v-for="i in space_total" :key="i">&nbsp;</span>
      <router-link :to=LinkMappings[1].url>{{ LinkMappings[1].label }}</router-link>
      <span v-for="i in space_total" :key="i">&nbsp;</span>
      <router-link :to=LinkMappings[2].url>{{ LinkMappings[2].label }}</router-link>
    </nav>
    <router-view class="router-view"/>
  </div>
</template>

<script lang="ts">
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import 'uikit/dist/css/uikit.min.css'
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    // 変数定義
    const LinkMappings = [
      {label: 'TOP', url: '/'},
      {label: 'GSAP', url: '/gsap'},
      {label: 'WASM', url: '/wasm'},
    ];
    const space_total = 5;

    // メソッド定義

    return { LinkMappings, space_total }
  }
});
</script>

<style>
html {
  overflow: overlay
}
body {
  background-color: #28282c;
  width: 100%;
  color: lightgray;
}
#app {
  height: 100vh;
}
canvas {
  position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
}
a:link, a:visited {
  color: lightgray;
  text-decoration: none;
}
a:hover, a:active {
  color: whitesmoke;
}
.nav_body {
  height: 100%;
}
nav {
  width: 100%;
  height: 2rem;
  text-align: center;
}
.router-view {
  height: calc(100% - 2rem);
}

</style>
