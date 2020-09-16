const path =require('path')
const fs = require('fs');

const filename = path.resolve(__dirname,'./data.txt');

// const readStream = fs.createReadStream()
// readStream.

// fs.readFile(filename,(err,data) => {
//   if(err) console.log(err);
//   console.log(data.toString());
// })
// 写入文件

const content = '以上是日志文件文件内容\r\n';
const opt = {
  flag: 'a' // 追加写入，覆盖写入用 'w'
}
fs.writeFile(filename, content, opt, (err) => {
  if(err){
    console.error(err);
    return;
  }
})

fs.access(filename,fs.constants.F_OK, (err) => {
  console.log();
})