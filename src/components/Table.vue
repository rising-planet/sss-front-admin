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
    <template v-slot:item.remote_product_id="{ value }">
      <div class="flex">
        <img
          :src="getProductImageSrc(value)"
          alt="Product Image"
          style="width: 25px; height: 25px"
        />
        <span class="pl-2">{{ getProductName(value) }} </span>
      </div>
    </template>
    <template v-slot:item.event_type="{ value }">
      <v-chip :color="getColor(value)">
        {{ value }}
      </v-chip>
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
        key: "remote_product_id",
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
    getColor(type) {
      const result = {
        "1+1": "red",
        "2+1": "blue",
        "3+1": "orange",
        "4+1": "dark",
      };
      return result[type] ?? "green";
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
    getProductImageSrc(remote_product_id) {
      const findedProduct = this.desserts.find(
        (obj) => obj.remote_product_id === remote_product_id
      );
      if (!findedProduct) return "";
      return findedProduct.product_image;
    },
    getProductName(remote_product_id) {
      const findedProduct = this.desserts.find(
        (obj) => obj.remote_product_id === remote_product_id
      );
      if (!findedProduct) return "-";
      return findedProduct.product_name;
    },
  },
};
</script>
