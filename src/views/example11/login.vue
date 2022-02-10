<template>
  <div>
    <h1>加强版登录</h1>
    <p>用户未登录加载此组件</p>
    <p>用户名：1001 密码：123456</p>
    <form ref="form">
      <label>用户名</label>
      <input type="text" v-model="number" />
      <br />
      <label>密码</label>
      <input type="password" v-model="password" />
      <br />
      <v-btn color="#64B5F6" small @click="login" type="button">登录</v-btn>
    </form>
  </div>
</template>
<script>
import { LOGIN } from "@/store/types.js";
export default {
  data: () => ({
    number: null,
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password
      });
      this.$refs.form.reset();
    }
  }
};
</script>
