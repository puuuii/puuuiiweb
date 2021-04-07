<template>
  <div class="body">
    <canvas id="PixiApp" width="300" height="300"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

export default defineComponent({
  name: 'Pixi',

  setup(props, context) {
    onMounted(() => {
      // アニメーション定義
      var app = new PIXI.Application({
        width:300,
        height:300,
        backgroundColor: 0x000000,
        view:document.getElementById("PixiApp") as HTMLCanvasElement
      });
      const image = PIXI.Sprite.from("https://2.bp.blogspot.com/-4ZYHDNZXle0/XOPXM3ep2hI/AAAAAAABS6g/-8KDGG07ySs8zFkiSGyin09A78Hfc3iAgCLcBGAs/s800/drone_illumination_sky.png");
      app.stage.addChild(image);
      gsap.to(image, {duration: 1, pixi:{blur:20}, repeat: -1, yoyo: true});
    });
  },
});
</script>

<style scoped>
</style>