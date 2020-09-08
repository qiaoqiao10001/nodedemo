const http = require('http');

const server = http.createServer((req,res) => {
  if(req.method === 'POST'){
    let postData = '';
    console.log('conten-type',req.headers['content-type']);
    req.on('data',chunk => {
      postData += chunk.toString();
    })

    req.on('end', () => {
      console.log('postdat'+postData);
      res.end(postData)
    })
  }
}).listen(8888)