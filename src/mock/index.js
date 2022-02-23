import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// {delayResponse: 2000}
let mock = new MockAdapter(axios);

// 地址，支持JS正则表达式
// 正则表达式中 \，由转义符，\/，替代
// 匹配任意字符，\w+；
// $，结束。避免匹配多个
// 整个表达式，置于/  /之间
// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/{uid}; /users/{uid}/courses/{hid}
function path(p) {
  let reg = p.replace(/{\w+}/g, "\\w+").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}
// ===================================

//reply的参数列表 (status, data, headers)
//status，http状态码  data是返回的json数据
// mock.onGet("users/12").reply(200, {
//   user: { userId: 1, userName: "BO" }
// });

// 等价于 users/任意值
mock.onGet(path("/users/{uid}")).reply(200, {
  user: { userId: 2, userName: "SUN" }
});

// /users/4/homeworks/21
mock.onGet(path("users/{uid}/homeworks/{hid}")).reply(200, {
  user: { userId: 4, userName: "ZHANG" }
});

// config是axios config对象。包含请求信息
// 返回数组，[status, {data对象}, {header对象}]
mock.onPost("login1").reply(c => {
  // 获取请求数据
  // 此时请求的js对象已转为json字符串。因此需要转换回JS对象
  let data = JSON.parse(c.data); //拿到请求体对象
  console.log(data.user);
  return [
    200,
    {
      user: { userId: 333, userName: "John Smith" }
    },
    { Authorization: "65a1c6wqfhqpfh223" }
  ];
});

mock.onGet(path("/homeworks")).reply(200, {
  homeworks: [
    { id: 1, name: "Java基本数据类型", deadline: "2022-02-07T17:30" },
    { id: 2, name: "Java封装", deadline: "2022-02-07T17:31" },
    { id: 3, name: "Java泛型", deadline: "2022-02-07T17:32" }
  ]
});

mock.onPost("login").reply(c => {
  // 此时请求的js对象已转为json字符串。因此需要转换回JS对象
  let data = c.data;
  let user = JSON.parse(data);
  let result = [401, { message: "用户名或密码错误" }];
  if (user.number == "1001" && user.password == "123456") {
    result = [
      200,
      {
        role: " 6983f9dwf34tfasf2"
      },
      { Authorization: "65a1c6wqfhqpfh223sfsfdg453626df456d" }
    ];
  }
  return result;
});

mock.onGet(path("/homeworks/{hid}")).reply(c => {
  let reg = /homeworks\/(\d+)/;
  let hid = c.url.match(reg)[1];
  return [
    200,
    {
      homework: homeworks.find(h => h.id == hid)
    }
  ];
});
//---------------------
const homeworks = [
  { id: 1, name: "Java基本数据类型", deadline: "2022-02-07T17:30" },
  { id: 2, name: "Java封装", deadline: "2022-02-07T17:31" },
  { id: 3, name: "Java泛型", deadline: "2022-02-07T17:32" }
];
