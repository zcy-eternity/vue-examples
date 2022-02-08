<template>
  <div>
    <h1>vue示例</h1>
    <ul>
      <li><router-link to="/example01">welcome</router-link></li>
      <li><router-link to="/example02">数据驱动&计算属性</router-link></li>
      <h3>路由传参</h3>
      <li>
        <router-link to="/example03/students/12/homeworks/1">
          路由传参
        </router-link>
      </li>
      <li>
        <router-link to="/example03/students/74/homeworks/2">
          路由传参
        </router-link>
      </li>
      <h3>基本指令</h3>
      <li><router-link to="/example04-01">v-text v-if v-show</router-link></li>
      <li><router-link to="/example04-02">v-bind</router-link></li>
      <li><router-link to="/example04-03">v-for</router-link></li>
      <h3>双向绑定</h3>
      <li><router-link to="/example05-01">v-module双向绑定</router-link></li>
      <li><router-link to="/example05-02">基于执行方法</router-link></li>
    </ul>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
