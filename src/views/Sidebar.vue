<template>
  <v-card>
    <v-card-title><h1>vue示例</h1></v-card-title>
    <v-list min-height="450px">
      <v-list-item to="/example01" dense>
        <v-list-item-title>welcome</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item to="/example02" dense>
        <v-list-item-title>数据驱动&计算属性</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-group prepend-icon="" no-action>
        <template v-slot:activator>
          <v-list-item-title>路由传参</v-list-item-title>
        </template>
        <v-list-item to="/example03/students/12/homeworks/1" dense>
          <v-list-item-title>sid:12; hid: 1</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example03/students/74/homeworks/2" dense>
          <v-list-item-title>sid:74; hid: 2</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-title>基本指令</v-list-item-title>
        </template>
        <v-list-item to="/example04-01" dense>
          <v-list-item-title>v-text v-if v-show</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example04-02" dense>
          <v-list-item-title>v-bind</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example04-03" dense>
          <v-list-item-title>v-for</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-title>双向绑定</v-list-item-title>
        </template>
        <v-list-item to="/example05-01" dense>
          <v-list-item-title>v-module双向绑定</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example05-02" dense>
          <v-list-item-title>基于执行方法</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-title>Vuex</v-list-item-title>
        </template>
        <v-list-item to="/example06-01" dense>
          <v-list-item-title>基本绑定</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example06-02" dense>
          <v-list-item-title>同步更新</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example06-03" dense>
          <v-list-item-title>异步更新</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-title>axios & mock</v-list-item-title>
        </template>
        <v-list-item to="/example07-01" dense>
          <v-list-item-title>基本请求及mock数据</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/homeworks" dense>
          <v-list-item-title>homeworks</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/example08-01" dense>
          <v-list-item-title>父组件向子组件传参</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-item to="/example09-01" dense>
        <v-list-item-title>Axios拦截器</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item to="/example10-01" dense>
        <v-list-item-title>嵌套路由</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>
