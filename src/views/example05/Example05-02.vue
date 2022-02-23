<template>
  <div>
    <p>
      需求必须提交条款才能选择操作以及提交；必须选择2项才能提交；等于两项时checkbox变为不可用
    </p>
    <form>
      <label><input type="checkbox" v-model="agreed" /></label>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`lab${index}`">
          <input
            ref="checkboxs"
            type="checkbox"
            :key="`input${index}`"
            v-model="selectedCourses"
            :value="{ id: c.id }"
            :disabled="!agreed"
            @change="change"
          />
          {{ c.name }}
        </label>
        <br :key="`br${index}`" />
      </template>
      <br />
      <v-btn
        color="#64B5F6"
        small
        type="button"
        :disabled="!agreed || !(selectedCourses.length >= amount)"
      >
        submit
      </v-btn>
    </form>
    <p>{{ selectedCourses }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    courses: [
      { id: 1, name: "JAVA" },
      { id: 2, name: "web开发技术" },
      { id: 3, name: "系统程序设计" },
      { id: 4, name: "移动终端开发技术" }
    ],
    amount: 2,
    selectedCourses: [{ id: 1 }],
    agreed: false
  }),
  methods: {
    change() {
      let checkboxDis = this.selectedCourses.length >= this.amount;
      this.$refs.checkboxs
        .filter(c => !c.checked)
        .forEach(c => {
          c.disabled = checkboxDis;
        });
    }
  }
};
</script>
