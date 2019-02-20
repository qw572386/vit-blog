'use strict';
const mongodb = {
  username: 'qiw',
  pwd: '123456',
  address: '127.0.0.1:27017',
  db: 'test'
}
const port = process.env.NODE_ENV === 'production' ? '80' : '5000'
module.exports = {
  mongodb,
  port
}
