import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/example02.vue")
  },
  {
    props: true,
    path: "/example03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    path: "/example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    path: "/example04-03",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    path: "/example05-01",
    component: () => import("@/views/example05/Example05-01.vue")
  },
  {
    path: "/example05-02",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    path: "/example06-03",
    component: () => import("@/views/example06/Example06-03.vue")
  },
  {
    path: "/example07-01",
    component: () => import("@/views/example07/Example07-01.vue")
  },
  {
    path: "/homeworks",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    props: true,
    path: "/homeworks/:hid",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    path: "/example08-01",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    path: "/example09-01",
    //声明不同的name属性，指定加载的组件到指定位置
    components: { default: () => import("@/views/example09/Example09-01.vue") }
  },
  {
    props: true,
    path: "/example10-01",
    component: () => import("@/views/example10/Example10-01.vue"),
    children: [
      {
        props: true,
        // 前面不加'/' 当路由到这时加载下面的组件
        path: "homeworks/:hid",
        component: () => import("@/views/example10/homework.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
