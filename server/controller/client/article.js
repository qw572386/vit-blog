const Article = require('../../model/article')
const result = require('../../util/result')
const get = async ctx => {
  try {
    const { pageNo = 1, pageSize = 2 } = ctx.request.query
    const limit = parseInt(pageSize, 10)
    const arrArticles = await Article.find().skip((parseInt(pageNo, 10) - 1) * limit).limit(limit);
    ctx.body = result.sucess('获取文章列表成功', arrArticles)
  } catch (e) {
    ctx.body = result.error('获取文章列表失败' + e.message)
  }
}
const add = async ctx => {
  try {
    const params = ctx.request.body
    console.log(params)
    const article = new Article(params)
    await article.save()
    ctx.body = result.sucess('发布文章成功')
  } catch (e) {
    ctx.body = result.error('发布文章失败' + e.message)
  }
}
module.exports = {
  get,
  add
}