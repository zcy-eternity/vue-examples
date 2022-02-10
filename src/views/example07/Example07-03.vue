<template>
  <div>
    <h1>{{ homework.name }}</h1>
  </div>
</template>
<script>
import { GET_HOMEWORK } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  props: ["hid"],
  // 从自己的data属性中获取，而不是计算属性中
  // data: () => ({
  //   homework: { name: null }
  // }),

  // created() {
  //   向GET_HOMEWORK发一个异步请求 此时结果返回一个promise 正常的结果then 异常catch
  //   then直接将结果注入
  //   this.$store.dispatch(GET_HOMEWORK, { hid: this.hid }).then(h => {
  //     this.homework = h;
  //   });
  // },

  created() {
    // 向GET_HOMEWORK发一个异步请求，同时带一个对象
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid });
  },
  computed: {
    ...mapState(["homework"])
  }
};
</script>
