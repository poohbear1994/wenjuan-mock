const Mock = require('mockjs')
const getStatList = require('./data/getStatList')

const Random = Mock.Random


module.exports = [
  // 答卷列表
  {
    url: '/api/stat/:questionId',
    method: 'get',
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const page = parseInt(query.page) || 1;
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          total: 100,
          list: getStatList(pageSize)
        }
      }
    }
  },
  // 获取单个组件的统计数据汇总
  {
    url: '/api/stat/:questionId/:componentId',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          stat: [
            { name: '选项1', count: 20 },
            { name: '选项2', count: 10 },
            { name: '选项3', count: 25 },
          ]
        }
      }
    }
  }
]