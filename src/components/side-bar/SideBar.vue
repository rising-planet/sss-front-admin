<template>
  <v-navigation-drawer color="transparent" v-model="drawer" border="0">
    <v-list>
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
        title="상승성"
      >
      </v-list-item>
    </v-list>
    <v-row wrap no-gutters>
      <v-col cols="1" class="text-center">
        <v-divider class="mt-3" />
      </v-col>
      <v-col cols="7" class="text-center">
        <span class="text-caption ligth-gray"> APPS & PAGES </span>
      </v-col>
      <v-col cols="4" class="text-center">
        <v-divider class="mt-3" />
      </v-col>
    </v-row>
    <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="사용자"> </v-list-item>
      <v-list-group prepend-icon="mdi-home" value="커뮤니티">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">커뮤니티</v-list-item>
        </template>
        <v-list-item> test1 </v-list-item>
        <v-list-item> test2 </v-list-item>
      </v-list-group>

      <v-list-item prepend-icon="mdi-home" to="product" title="행사제품">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="행사제품"
          ></v-list-item>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
const open = ref(["Users"]);
const drawer = ref(true);
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
