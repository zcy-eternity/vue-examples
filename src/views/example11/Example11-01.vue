<template>
  <div>
    <index v-if="isLogin" />
    <login v-else />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {
    index: () => import("@/views/example11/index.vue"),
    login: () => import("@/views/example11/login.vue")
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
