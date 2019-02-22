const router = require('koa-router')()
const admin = require('../controller/admin');
router.post('/admin/register', admin.user.register)
router.post('/admin/login', admin.user.login)
router.get('/admin/verifyInfo', admin.user.verifyInfo)

module.exports = router
