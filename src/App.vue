<template>
  <v-app class="bg-default" id="inspire">
    <SideBar />
    <AppBar />
    <v-main>
      <!--
        중복 코드가 너무 많음, slot 관련 제거할 방법 찾기
        select 컴포넌트에 static 데이터 연결하기
      -->
      <v-container class="py-0 px-6" fluid>
        <SelectContainer>
          <template v-slot:header>
            <h3>검색옵션</h3>
          </template>
          <template
            v-for="selectItem in selectComponentList"
            :key="selectItem.selectKey"
          >
            <v-col class="pl-3 py-0" cols="6">
              <Select
                @update:modelValue="selectEmitEvent"
                :label="selectItem.label"
                :selectKey="selectItem.selectKey"
                :items="selectItem.items"
              />
            </v-col>
          </template>
        </SelectContainer>
        <TableContainer>
          <Table />
        </TableContainer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/app-bar/AppBar";
import SideBar from "@/components/side-bar/SideBar";
import Select from "@/components/Select.vue";
import SelectContainer from "@/components/SelectContainer.vue";
import Table from "@/components/Table.vue";
import TableContainer from "@/components/TableContainer.vue";

export default {
  components: {
    AppBar,
    SideBar,
    Select,
    SelectContainer,
    Table,
    TableContainer,
  },
  data: () => ({
    selectComponentList: [
      {
        label: "월 선택",
        selectKey: "month",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        selectedItem: null,
      },
      {
        label: "편의점 선택",
        selectKey: "store",
        items: ["CU", "GS", "EMART", "SEVEN"],
        selectedItem: null,
      },
      {
        label: "행사 선택",
        selectKey: "event",
        items: ["1+1", "2+1", "3+1", "4+1"],
        selectedItem: null,
      },
      {
        label: "공개 여부",
        selectKey: "isOpen",
        items: ["공개", "비공개"],
        selectedItem: null,
      },
    ],
  }),
  methods: {
    selectEmitEvent(selectedKey, updateValue) {
      console.log("selectedKey, updateValue : ", selectedKey, updateValue);
      const findedSelectItem = this.selectComponentList.find(
        (obj) => obj.selectKey === selectedKey
      );
      if (!findedSelectItem) {
        console.log("findedSelectItem not found");
        return;
      }
      findedSelectItem.selectedItem = updateValue;
    },
  },
  created() {
    console.log(process.env.VUE_APP_TITLE);
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
