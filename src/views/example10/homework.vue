<template>
  <div>
    <hr />
    <h3>作业 :</h3>
    <h1>{{ homework.name }}</h1>
    {{ homework.deadline }}
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque id
      incidunt magni eos vel blanditiis quasi nisi illo voluptatem distinctio
      adipisci qui quos, minus debitis at dolor voluptas unde!
    </p>
  </div>
</template>
<script>
import { GET_HOMEWORK } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  props: ["hid"],
  created() {
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid });
  },
  computed: {
    ...mapState(["homework"])
  }
};
</script>
<style scoped>
div {
  height: 300px;
}
div p {
  text-indent: 1em;
}
</style>
