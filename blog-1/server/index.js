const http = require('http');
const qs = require('querystring');
let data = {
  username: "lisi",
  password: "123456"
}
data = qs.stringify(data); //数据以url param格式发送
data = JSON.stringify(data); //数据以json格式发送


const options = {
  host: 'localhost',
  port: 8899,
  method: 'POST',
  path: '/api/user/login',
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
}

const req = http.request(options, res=>{
  let chunks = []
  res.on('data',chunk => {
    chunks.push(chunk);
    console.log(chunks.toString());

  })
  res.on('end',data => {
    console.log(data);
  })
})
req.on('error',e=>{
  console.log(e);
})
req.write(data)
req.end()