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
      <v-list-item prepend-icon="mdi-home" title="사용자"></v-list-item>
      <v-list-item prepend-icon="mdi-home" title="커뮤니티"></v-list-item>

      <v-list-group value="행사제품">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="행사제품"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideBar",
  data: () => ({
    drawer: null,
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    open: ["Users"],

    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
