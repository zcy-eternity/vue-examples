<template>
  <div>
    <h1>父组件绑定子组件属性</h1>
    <table>
      <tr>
        <th>#</th>
        <th>题目</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      <!-- 绑定的homework为子组件中的prop属性 -->
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ h.name }}</td>
        <td>{{ h.deadline }}</td>
        <td><DelButton v-bind:homework="h" /></td>
      </tr>
    </table>
  </div>
</template>
<script>
import { LIST_HOMEWORKS } from "@/store/types.js";
import { mapState } from "vuex";
import DelButton from "./DelButton";
export default {
  components: { DelButton },
  created() {
    this.$store.dispatch(LIST_HOMEWORKS);
  },
  computed: {
    ...mapState(["homeworks"])
  }
};
</script>
