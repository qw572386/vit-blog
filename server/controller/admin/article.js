const Article = require('../../model/article')
const result = require('../../util/result')
const addArticle = async ctx => {
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
const updateArticle = async ctx => {
  try {
    const articleId = ctx.request.query.articleId
    const article = await Article.findById(articleId)
    if (!article) {
      throw new Error('文章不存在')
    }
    const payload = ctx.request.body
    await Article.findByIdAndUpdate(articleId, payload)
    ctx.body = result.sucess('修改文章成功')
  } catch (e) {
    ctx.body = result.error('修改文章失败' + e.message)
  }
}
const delArticle = async ctx => {
  try {
    const articleId = ctx.request.query.articleId
    const article = await Article.findById(articleId)
    if (!article) {
      throw new Error('文章不存在')
    }
    await Article.findByIdAndDelete(articleId)
    ctx.body = result.sucess('删除文章成功')
  } catch (e) {
    ctx.body = result.error('删除文章失败' + e.message)
  }
}
module.exports = {
  addArticle,
  updateArticle,
  delArticle
}