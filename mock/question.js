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
          desc: '页面描述',
          css: '',
          js: '',
          isPublished: true,
          // 问卷组件列表
          componentList: [
            // Info
            {
              fe_id: Random.id(),
              type: 'questionInfo',
              title: '问卷信息',
              isHidden: false,
              props: {
                title: '问卷信息1',
                desc: '这是一个问卷描述'
              }
            },
            // Title
            {
              fe_id: Random.id(),
              // 组件类型不能重复，前后端统一好
              type: 'questionTitle',
              // 组件标题
              title: '标题',
              isHidden: false,
              props: {
                text: '个人信息调研',
                level: 1,
                isCenter: true
              }
            },
            // Input
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '输入框',
              isHidden: false,
              props: {
                title: '你的姓名',
                placeholder: '请输入姓名...'
              }
            },
            // Input
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '输入框',
              isHidden: false,
              props: {
                title: '你的电话',
                placeholder: '请输入电话...'
              }
            },
            // Paragraph
            {
              fe_id: Random.id(),
              type: 'questionParagraph',
              title: '段落',
              isHidden: false,
              props: {
                text: '某男子在5月14日20：00竟然...',
                isCenter: true
              }
            },
            // Textarea
            {
              fe_id: Random.id(),
              type: 'questionTextarea',
              title: '文本输入框',
              isHidden: false,
              props: {
                title: '这是一个文本输入框',
                isCenter: true
              }
            },
            // Radio
            {
              fe_id: Random.id(),
              type: 'questionRadio',
              title: '单选',
              isHidden: false,
              props: {
                title: '单选',
                isVertical: false,
                options: [
                  { value: 'item1', text: '男人' },
                  { value: 'item2', text: '女人' },
                  { value: 'item3', text: '不男不女' },
                ],
                value: 'item3'
              }
            },
            // Checkbox
            {
              fe_id: Random.id(),
              type: 'questionCheckbox',
              title: '多选',
              isHidden: false,
              props: {
                title: '多选',
                isVertical: false,
                list: [
                  { value: 'item1', text: '男人', checked: true },
                  { value: 'item2', text: '女人', checked: true },
                  { value: 'item3', text: '不男不女', checked: true },
                ],
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
