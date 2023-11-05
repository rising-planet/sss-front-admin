<template>
  <v-container class="rounded elevation-5">
    <v-row class="mb-6">
      <v-col cols="12">
        <slot name="header"></slot>
      </v-col>
    </v-row>
    <v-row>
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SelectContainer",
};
</script>
