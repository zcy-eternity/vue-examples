<template>
  <div>
    <h1>Mutation</h1>
    {{ user.name }} / {{ user.address }}
    <div>
      <v-text-field label="User Name" v-model="myUser.name" />
      <v-text-field label="Password" v-model="myUser.address" />
    </div>
    <v-btn color="#64B5F6" small type="button" @click="change">change</v-btn>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    myUser: {
      name: null,
      address: null
    }
  }),
  methods: {
    change() {
      this.$store.commit("updateUser", this.myUser);
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
