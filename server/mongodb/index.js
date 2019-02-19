'use strict';
const mongoose = require('mongoose')
const conf = require('../config/index')
const DB_URL = `mongodb://${conf.mongodb.username}:${conf.mongodb.pwd}@${conf.mongodb.address}/${conf.mongodb.db}`
mongoose.Promise = global.Promise
mongoose.connect(DB_URL, {useNewUrlParser: true}, err => {
  if (err) console.log('数据库链接失败')
  else console.log('数据库链接成功')
})
module.exports = mongoose
