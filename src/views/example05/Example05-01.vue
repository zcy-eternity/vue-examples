<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <!-- 绑定到一个响应式属性上为一组,相当于name -->
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <!-- 以select中的name为键，以option中选择的值为值 值是动态绑定的-->
      <select v-model="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <!-- key没有绑定到template上 双向绑定到每一个input标签-->
      <template v-for="(c, index) in courses">
        <label :key="`lab${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="{ id: c.id }"
            :key="`ch${index}`"
          />
          {{ c.name }}
        </label>
        <br :key="`br${index}`" />
      </template>
      <!-- 
        显示声明为button类型 不能用submit
        form表单仅是一个容器
        不是由浏览器发请求而是由js提供 
      -->
      <button @click="submit" type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
    <!-- 读取文件不能用双向绑定 只能用change事件监听 -->
    <input type="file" @change="fileChange" />
    <br />
    <p v-if="file != null">{{ file.name }}/{{ file.size }}</p>
    <br />
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: null,
      sex: null,
      courses: [],
      title: {}
    },
    file: {},
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "教授" },
      { id: 3, name: "副教授" }
    ],
    courses: [
      { id: 4, name: "JAVA" },
      { id: 5, name: "web开发技术" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    submit() {
      console.log(this.user);
    },
    // 文件操作需要拿到本次的事件对象 event.target 相当于input元素
    fileChange(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
    }
  }
};
</script>
