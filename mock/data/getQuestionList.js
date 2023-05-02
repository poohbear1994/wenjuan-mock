const Mock = require("mockjs");
const Random = Mock.Random;

/**
 * @description: 生成问卷列表
 * @param {*} len 需要生成的数量
 * @return {*}
 */
const getQuestionList = (opt = {}) => {
  const { len = 10, isDeleted = false, isStar = false } = opt;
  console.log(len, isDeleted, isStar);

  const list = [];
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStart: isStar ? true : Random.boolean(),
      // 随机生成自然数
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted: isDeleted,
    });
  }

  return list;
};

module.exports = getQuestionList;
