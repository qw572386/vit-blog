'use strict';
const sucess = (msg = '成功', data = {}) => {
  return {
    code: 0,
    msg,
    data
  }
}
const error = (msg = '失败', code = 1, data = {}) => {
  return {
    code,
    msg,
    data
  }
}
module.exports = {
  sucess,
  error
}
