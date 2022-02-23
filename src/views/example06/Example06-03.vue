<template>
  <div>
    <h1>Mutation</h1>
    {{ user.name }} / {{ user.address }}
    <p>
      <v-text-field label="User Name" v-model="myUser.name" />
      <v-text-field label="Password" v-model="myUser.address" />
      <v-btn color="#64B5F6" small type="button" @click="change">change</v-btn>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { UPDATAUSER } from "@/store/types.js";
export default {
  data: () => ({
    myUser: {
      name: null,
      address: null
    }
  }),
  methods: {
    change() {
      this.$store.dispatch(UPDATAUSER, this.myUser);
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
<style scoped>
.v-text-field {
  width: 200px;
}
</style>
