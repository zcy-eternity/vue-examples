<template>
  <div>
    <h1>axios基本请求</h1>
    <p>
      基本get请求测试
      <br />
      <v-btn color="#64B5F6" small @click="getUser">getUser</v-btn>
      <br />
      匹配表达式测试
    </p>
    <v-btn color="#64B5F6" small @click="getHomeWork">getHomeWork</v-btn>
    <p>{{ user.userId }} / {{ user.userName }}</p>
    <hr />
    <p>
      post请求测试
      <br />
      <v-btn color="#64B5F6" small @click="login">login</v-btn>
    </p>
  </div>
</template>
<script>
import axios from "@/axios/index.js";
export default {
  data: () => ({
    user: {
      userName: null,
      userId: null
    }
  }),
  methods: {
    //get请求本身是异步的 返回一个promise对象 对象内部封装着返回的数据 之后执行回调函数
    // getUser() {
    //   axios.get("users/14").then(resp => {
    //     console.log(resp);
    //     // 返回的响应对象中的body在data对象中 之后要根据前后端约定好的接口
    //     this.user = resp.data.user;
    //   });
    // },

    // 异步的操作 直到结果回来往后执行 同步的写法 返回一个封装到promise中的结果
    async getUser() {
      let resp = await axios.get("users/12");
      console.log(resp);
      this.user = resp.data.user;
    },
    getHomeWork() {
      axios.get("users/12/homeworks/12").then(resp => {
        this.user = resp.data.user;
      });
    },
    login() {
      axios
        .post("login", {
          user: {
            userName: "bo",
            userId: "B12"
          }
        })
        .then(resp => {
          console.log(resp.headers["Authorization"]);
          this.user = resp.data.user;
        });
    }
  }
};
</script>
