const mysql = require('mysql');

// 创建连接对象
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zhangqiao520',
  port:'3306',
  database: 'myblog'
})
// 连接数据库
conn.connect()

// 执行sql语句
// const sql = 'select id,username from users;';
const sql = `update users set realname='李四222' where username='lisi'`
conn.query(sql, (err,result) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(result);
})
// 关闭连接
conn.end();