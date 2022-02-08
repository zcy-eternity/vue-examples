<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }}</p>
    <p>{{ replace }}</p>
    <p>{{ myreplace(user.insertTime) }}</p>
    <!-- 如果需要加参数可以加括号 -->
    <button @click="changed">click</button>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     msg: null,
  //     user: {
  //       name: "bp"
  //     },
  //     course: []
  //   };
  // }
  //圆括号表示return语句 返回的是一个对象
  data: () => ({
    msg: null,
    user: {
      name: "bp",
      insertTime: "2022/2/7T14:12"
    },
    course: []
  }),
  methods: {
    changed() {
      this.user.name = "SUN";
    }
  },
  computed: {
    //属性的getter方法
    replace() {
      return this.user.insertTime.replace("T", " ");
    },
    myreplace() {
      return (data) => data.replace("T", " ");
    }
  }
};
</script>
