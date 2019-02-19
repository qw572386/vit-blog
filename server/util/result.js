'use strict';
const sucess = (msg = '成功', data = {}) => {
  return {
    code: 0,
    msg,
    data
  }
}
const error = (msg = '失败', data = {}) => {
  return {
    code: 1,
    msg,
    data
  }
}
module.exports = {
  sucess,
  error
}
