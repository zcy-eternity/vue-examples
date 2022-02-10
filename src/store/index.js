import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/index";
Vue.use(Vuex);

const myState = {
  exception: { message: null },
  isLogin: false,
  user: {
    name: "bo",
    address: 956
  },
  homeworks: [],
  homework: {}
};
//在内部声明事件 同步 更新
const myMutations = {
  updateUser(state, user) {
    state.user = user;
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data;
  },
  [types.GET_HOMEWORK](state, data) {
    state.homework = data;
  },
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.user = data;
  }
};
const myActions = {
  [types.UPDATAUSER]({ commit }, data) {
    setTimeout(() => {
      commit(types.UPDATAUSER, data);
    }, 2000);
  },
  async [types.LIST_HOMEWORKS]({ commit }, data) {
    let resp = await axios.get("homeworks");
    commit(types.LIST_HOMEWORKS, resp.data.homeworks);
  },
  async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homeworks/${data.hid}`);
    commit(types.GET_HOMEWORK, resp.data.homework);
  },
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    if (resp) {
      sessionStorage.setItem("Authorization", resp.headers["Authorization"]);
      sessionStorage.setItem("role", resp.data.role);
      commit(types.LOGIN, true);
    }
  }

  //将返回的数据不放到vuex上，直接给相应的组件 返回 promise成功后的结果
  // async [types.GET_HOMEWORK]({ commit }, data) {
  //   let resp = await axios.get(`homeworks/${data.hid}`);
  //   return Promise.resolve(resp.data.homework)
  // }
};
export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
