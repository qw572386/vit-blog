'use strict';
const userShema = require('../../model/user')
const md5 = require('../../util/md5')
const jwt = require('jsonwebtoken')
const result = require('../../util/result')
const conf = require('../../config')
/**
 * 注册
 */
const register = async (ctx, next) => {
  const {phone, pwd} = ctx.request.body
  try {
    const users = await userShema.find({phone})
    if (users.length > 0) {
      throw new Error('用户已存在')
    } else {
      const npwd = md5(pwd);
      const user = new userShema({phone, pwd: npwd});
      await user.save();
      ctx.body = result.sucess('新增用户成功')
    }
  } catch (e) {
    ctx.body = result.error(e.message)
  }
}
/**
 * 登录
 */
const login = async (ctx, next) => {
  const {phone, pwd} = ctx.request.body
  try {
    const user = await userShema.findOne({phone})
    if (!user) {
      throw new Error('用户不存在')
    }
    if (md5(pwd) !== user.pwd) {
      throw new Error('用户名或密码错误')
    }
    // 更新登录时间
    const rs = await userShema.update({ phone }, { lastLoginTime: new Date() }, { upsert: true })
    const payload = {
      _id: user._id,
      userName: user.userName,
      phone: user.phone,
      roles: user.roles
    }
    // 设置token签名为24小时
    const token = jwt.sign(payload, conf.auth.admin_secret, { expiresIn: '24h' })
    console.log(token)
    ctx.cookies.set(conf.auth.tokenKey, token, { httpOnly: false })
    ctx.body = result.sucess('登录成功')
  } catch (e) {
    ctx.body = result.error(e.message)
  }
}
/**
 * token验证
 */
const verifyInfo = async (ctx, next) => {
  try {
    const token = ctx.request.query.token
    const tokenInfo = jwt.verify(token, conf.auth.admin_secret)
    ctx.body = result.sucess('验证成功', tokenInfo)
  } catch (e) {
    if ('TokenExpiredError' === e.name) {
      ctx.body = result.error('登录过期, 请重新登录', -1)
    } else {
      ctx.body = result.error('系统异常')
    }
  }
}
const update = async (ctx, next) => {
  try {
    const userId = ctx.request.query.userId
    const params = ctx.request.body
    await userShema.findOneAndUpdate({ _id: userId }, params)
    ctx.body = result.sucess('修改用户信息成功')
  } catch (e) {
    ctx.body = result.error('修改用户信息失败' + e.message)
  }
}
module.exports = {
  register,
  login,
  verifyInfo,
  update
}
