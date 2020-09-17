const fs = require('fs')
const path = require('path')

function writeLog(writeStream,log){
  writeStream.write(log + '\n');
}

function createWriteStream(filename){
  const fullPath = path.join(__dirname, '../','logs',filename)
  const writeStream = fs.createWriteStream(fullPath,{
    flags: 'a'
  })
  return writeStream
}

// 写访问日志
const accessWriteStream = createWriteStream('access.log');

function access(log){
  writeLog(accessWriteStream,log)
}

module.exports = {
  access
}