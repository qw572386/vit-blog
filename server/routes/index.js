const router = require('koa-router')()
const admin = require('../controller/admin');
router.post('/admin/register', admin.user.register)

module.exports = router
