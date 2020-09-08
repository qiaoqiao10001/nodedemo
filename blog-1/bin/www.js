
const serverHandle = require('../app')
const http = require('http');
const PORT = 8888;
const server = http.createServer(serverHandle);

server.listen(PORT,() => {console.log(`listern at ${PORT}`);})

