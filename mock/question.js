const Mock = require("mockjs");
const getQuestionList = require("../mock/data/getQuestionList");

const Random = Mock.Random;

module.exports = [
  // 获取单个问卷详情
  {
    url: "/api/question/:id", // 获取单个问卷
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  // 创建问卷
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  // 查询问卷列表
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      const isDeleted = ctx.url.indexOf("isDeleted=true") >= 0;
      const isStar = ctx.url.indexOf("isStar=true") >= 0;

      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar }), // 当前页的
          total: 100, // 总数
        },
      };
    },
  },
];
