<template>
  <v-container class="rounded elevation-5">
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

<script>
export default {
  name: "SelectContainer",
};
</script>
