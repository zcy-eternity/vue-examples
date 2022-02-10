import axios from "axios";
import store from "@/store/index";
import { GET_EXCEPTION } from "@/store/types";
axios.defaults.baseURL = "/api/";

//请求拦截器 use 回调的方法
axios.interceptors.request.use(
  req => {
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  resp => {
    //响应状态码200
    return resp;
  },
  error => {
    let resp = error.response;
    if (resp) {
      switch (resp.status) {
        case 401:
          //可基于响应码，声明单独的处理
          break;
      }
      //此时为同步事件，统一将异常信息置于store
      store.commit(GET_EXCEPTION, { message: resp.data.message });
    }

    //异常统一弹窗处理，因此不再返回Promise inject
    //此时为同步事件，统一将异常信息置于store
    store.commit(GET_EXCEPTION, { message: resp.data.message });
  }
);
export default axios;
