'use strict';
const userShema = require('../../model/user')
const md5 = require('../../util/md5')
const result = require('../../util/result')
const register = async (ctx, next) => {
  const {phone, pwd} = ctx.request.body
  try {
    const users = await userShema.find({phone})
    if (users.length > 0) {
      throw new Error('用户已存在')
    } else {
      const pwd = md5(pwd);
      const user = new userShema({phone, pwd});
      const resultData = await user.save();
      if (resultData) {
        ctx.body = result.sucess('新增用户成功')
      }
    }

  } catch (e) {
    ctx.body = result.error(e.message)
  }
}
