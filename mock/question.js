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
          // 问卷组件列表
          componentList: [
            // Title
            {
              id: Random.id(),
              // 组件类型不能重复，前后端统一好
              type: 'questionTitle',
              // 组件标题
              title: '标题',
              props: {
                text: '个人信息调研',
                level: 1,
                isCenter: false
              }
            },
            // Input
            {
              id: Random.id(),
              type: 'questionInput',
              title: '输入框',
              props: {
                title: '你的姓名',
                placeholder: '请输入姓名...'
              }
            },
            // Input
            {
              id: Random.id(),
              type: 'questionInput',
              title: '输入框',
              props: {
                title: '你的电话',
                placeholder: '请输入电话...'
              }
            }
          ]
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
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const page = parseInt(query.page) || 1;
      const pageSize = parseInt(query.pageSize) || 10;

      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar, len: pageSize }), // 当前页的
          total: 100, // 总数
        },
      };
    },
  },

  // 更新问卷
  {
    url: "/api/question/:id", // 获取单个问卷
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },

  // 复制问卷
  {
    url: "/api/question/duplicate/:id", // 获取单个问卷
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

  // 批量删除
  {
    url: "/api/question", // 获取单个问卷
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
