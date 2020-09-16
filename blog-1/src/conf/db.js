const env = process.env.NODE_ENV
let REDIS_CONF
let MYSQL_CONF

if(env === 'dev'){
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'zhangqiao520',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    host: 'localhost',
    port: 6379
  }
}


if(env === 'production'){
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'zhangqiao520',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    host: 'localhost',
    port: 6379
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}













// console.log(env);
// const xss = require('xss')
// var html = xss('<script>alert(1)</script>')
// console.log(html);

