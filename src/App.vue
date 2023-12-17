<script setup lang="ts">
import AppBar from "@/components/app-bar/AppBar.vue";
import SideBar from "@/components/side-bar/SideBar.vue";
</script>
<template>
  <v-app class="bg-default" id="inspire">
    <side-bar />
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
