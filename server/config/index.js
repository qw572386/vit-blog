'use strict';
const mongodb = {
  username: 'qiw',
  pwd: '123456',
  address: '127.0.0.1:27017',
  db: 'test'
}
const auth = {
  admin_secret: 'admin-token',
  tokenKey: 'Token-Auth',
  whiteList: ['login', 'client_api'],
  blackList: ['admin_api']
}
const port = process.env.NODE_ENV === 'production' ? '80' : '5000'
module.exports = {
  mongodb,
  port,
  auth
}
