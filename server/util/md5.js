'use strict';
const crypto = require('crypto')
module.exports = pwd => {
  const md5 = crypto.createHash('md5')
  const newPwd = md5.update(pwd).digest('hex')
  return newPwd
}
