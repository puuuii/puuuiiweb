<template>
  <div class="nav">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li class="uk-active" v-for="(map, i) in LinkMappings" :key="i">
            <router-link :to=map.url>{{ map.label }}</router-link>
          </li>
        </ul>
      </div>
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
      {label: 'GSAP', url: 'gsap'},
      {label: 'WASM', url: 'wasm'},
    ];

    // メソッド定義
    const transitionTo = (url: string) => router.push(url);

    return { LinkMappings, transitionTo }
  }
});
</script>

<style>
 body {
   background-color: #28282c;
   width: 100%;
   height: 100vh;
 }

 .uk-navbar-container:not(.uk-navbar-transparent) {
    background: rgba(0, 0, 0, 0);
  }

  .uk-navbar-nav>li.uk-active>a {
      color: lightgray;
  }
</style>
