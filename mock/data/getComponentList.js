/**
 * @description: 生成组件列表
 * @author 卢见信
 */

const Mock = require("mockjs");
const Random = Mock.Random;

const getComponentList = () => {
  return [
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
}

module.exports = getComponentList