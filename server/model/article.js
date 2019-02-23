const db = require('../mongodb')
const articleShema = db.Schema({
  title: String,
  desc: String,
  html: String,
  tags: Array,
  isVisible: Boolean,
  createTime: {
    type: Date,
    default: Date.now
  }
})
module.exports = db.model('article', articleShema)