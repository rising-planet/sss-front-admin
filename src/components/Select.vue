<template>
  <v-select
    class="pt-0 pb-0"
    @update:modelValue="$emit('update:modelValue', selectKey, $event)"
    :label="label"
    :items="items"
    variant="outlined"
    density="compact"
  ></v-select>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["update:modelValue"]);
defineProps({
  label: {
    type: String,
    required: true,
    default: () => {
      return "옵션을 선택해주세요";
    },
  },
  selectKey: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: false,
    default: () => {
      return [];
    },
  },
});
// export default {
//   emits: ["update:modelValue"],
//   props: {
//     label: {
//       type: String,
//       required: true,
//       default: () => {
//         return "옵션을 선택해주세요";
//       },
//     },
//     selectKey: {
//       type: String,
//       required: true,
//     },
//     items: {
//       type: Array,
//       required: false,
//       default: () => {
//         return [];
//       },
//     },
//   },
// };
</script>
