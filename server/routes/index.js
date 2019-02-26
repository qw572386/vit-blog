const router = require('koa-router')()
const admin = require('../controller/admin')
const client = require('../controller/client')
router.post('/admin/register', admin.user.register)
router.post('/admin/login', admin.user.login)
router.get('/admin/verifyInfo', admin.user.verifyInfo)
router.post('/admin/update', admin.user.update)
router.post('/article/update', admin.article.updateArticle)
router.post('/article/delete', admin.article.delArticle)
router.post('/article/add', admin.article.addArticle)

router.get('/article/get', client.article.get)

module.exports = router
