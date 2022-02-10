<template>
  <div>
    <h1>State绑定</h1>
    <p>
      通过根组件store对象绑定
      <br />
      {{ getUser.name }} / {{ getUser.address }}
    </p>
    <hr />
    <p>
      通过mapState绑定
      <br />
      {{ user.name }}
      <br />
      {{ user1.name }}
    </p>
  </div>
</template>
<script>
// 辅助方法
import { mapState } from "vuex";
export default {
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    // 名称与state中的一样
    ...mapState(["user"]),
    //相当于本地声明一个计算属性的变量user1 实际用的是user
    //对象扩展符
    ...mapState({ user1: state => state.user })
  }
};
</script>
