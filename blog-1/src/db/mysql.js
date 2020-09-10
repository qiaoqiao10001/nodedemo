const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')

const conn = mysql.createConnection(MYSQL_CONF);

conn.connect();


// 统一执行sql的函数

function exec(sql){
  const promise = new Promise((resolve,reject) => {
    conn.query(sql, (err,result) => {
      if(err){
        console.log(err);
        return;
      }
      resolve(result)

    })
  })
  return promise;
}
conn.on('error', function (err) {
  console.log('caught this error: ' + err.toString());
});


module.exports = {
  exec
}