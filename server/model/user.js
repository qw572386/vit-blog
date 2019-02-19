'use strict';
const db = require('../mongodb')
const userSchema = db.Schema({
  userName: String,
  pwd: String,
  phone: {
    unique:true,
    type: String
  },
  avatar: String,
  roles: Array,
  createTime: {
    type: Date,
    default: Date.now
  },
  lastLoginTime: Date
})
module.exports = db.model('user', userSchema);
