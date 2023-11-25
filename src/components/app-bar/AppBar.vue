<template>
  <v-app-bar color="transparent" elevation="0">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            prepend-icon="mdi-magnify"
            variant="outlined"
            hide-details="auto"
            density="compact"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <div class="d-flex align-center justify-end">
            <v-avatar class="mr-2" color="primary" size="x-small">
              32
            </v-avatar>
            <v-avatar class="mr-2" color="primary" size="x-small">
              32
            </v-avatar>
            <v-avatar class="mr-2" color="primary" size="x-small">
              32
            </v-avatar>

            <v-avatar color="secondary"> 48 </v-avatar>

            <!-- <v-avatar color="info" size="x-large"> 64 </v-avatar> -->
          </div>
        </v-col>
      </v-row>
      <!-- <v-app-bar-title>상승성</v-app-bar-title> -->
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
