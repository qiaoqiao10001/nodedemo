const http = require("http");
const querystring = require('querystring')

http.createServer((req,res) => {
  const url = req.url;
  console.log(url);
  req.querystring = querystring.parse(url.split('?')[1])

  res.end(JSON.stringify(req.querystring));
  
}).listen(8888)