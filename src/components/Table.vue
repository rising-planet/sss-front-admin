<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
    show-select
  >
    <template v-slot:top>
      <v-toolbar class="bg-white">
        <v-toolbar-title></v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item)">
        mdi-dots-vertical
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { Product } from "@/entities/product.entity";

export default {
  name: "Table",
  data: () => ({
    dialog: false,
    headers: [
      {
        title: "제품명",
        align: "start",
        sortable: false,
        key: "product_name",
      },
      { title: "행사종류", key: "event_type" },
      { title: "개당 가격", key: "price" },
      { title: "행사 월", key: "month" },
      { title: "편의점", key: "store_id" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = Array.from(
        { length: 10 },
        () =>
          new Product(
            1,
            "test-product",
            "포카칩",
            "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            3000,
            "1+1",
            "6월"
          )
      );
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>
