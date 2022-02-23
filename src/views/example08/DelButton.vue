<template>
  <div>
    <v-btn color="#64B5F6" small @click="del()">删除</v-btn>
  </div>
</template>
<script>
import { DELHOMEWORK } from "@/store/types.js";
export default {
  props: ["homework"],
  methods: {
    del() {
      let r = confirm(`你确定删除${this.homework.name}作业吗？`);
      if (r) {
        this.$store.dispatch(DELHOMEWORK, { hid: this.homework.id });
        alert(`${this.homework.name}作业已删除`);
      }
    }
  }
};
</script>
