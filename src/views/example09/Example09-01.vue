<template>
  <div>
    <h1>Axios拦截器</h1>
    <p>当用户名/密码：1001，123456</p>
    <form>
      <label></label>
      <v-text-field label="User Name" type="text" v-model="number" />
      <br />
      <label></label>
      <v-text-field label="Password" type="password" v-model="password" />
      <br />
      <v-btn color="#64B5F6" small type="button" @click="login">登录</v-btn>
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
    }
  }
};
</script>
<style scoped>
.v-text-field {
  width: 200px;
}
</style>
