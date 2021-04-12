<template>
  <div id="profile body">
    <nav>
      <router-link to="/profile/skill">Skill</router-link>
    </nav>
    <router-view class="router-view"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profile',

  setup(props, context) {
  }
});
</script>

<style scoped>
</style>