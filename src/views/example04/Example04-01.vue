<template>
  <div>
    <h1>v-text</h1>
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <p v-if="user.lever == admin">此内容仅admin可见</p>
    <div width="200px" style="display: inline-block">
      <template v-if="userNameLogin">
        <p>第一个input会被复用，输入的信息切换时会被保存</p>
        <v-text-field placeholder="Enter your name"></v-text-field>
        <br />
        <v-text-field type="password" placeholder="Enter your password" />
      </template>
      <template v-else>
        <v-text-field placeholder="Enter your key" />
      </template>
    </div>

    <br />
    <v-btn color="#64B5F6" small v-on:click="changeInput">切换</v-btn>
    <h1>v-show</h1>
    <p v-show="close">此内容仅close为true可见</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "hello world",
    admin: true,
    userNameLogin: true,
    user: { username: "bo", lever: "user" },
    close: false
  }),
  methods: {
    changeInput() {
      this.userNameLogin = !this.userNameLogin;
    }
  }
};
</script>
