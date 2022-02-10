<template>
  <div>
    {{ sid }}
    {{ $route.params.sid }}
    {{ getTitle }}
  </div>
</template>
<script>
export default {
  //相当于对外暴露的接口 可以往里传值 data 内部封装
  props: ["sid", "hid"],
  data: () => ({
    homeworks: [
      { id: 1, title: "spring" },
      { id: 2, title: "springmvc" },
      { id: 3, title: "jpa" }
    ]
  }),
  created() {
    console.log("created");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  computed: {
    getTitle() {
      return this.homeworks.find(h => h.id == this.hid).title;
    }
  }
};
</script>
