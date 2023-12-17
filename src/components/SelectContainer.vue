<template>
  <v-container class="rounded elevation-5 bg-white mb-6">
    <v-row>
      <v-col class="pl-3 pt-3" cols="12">
        <slot name="header"></slot>
      </v-col>
    </v-row>
    <v-row>
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>
