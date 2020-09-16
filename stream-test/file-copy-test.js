const fs = require('fs');
const path = require('path');

let file = path.resolve(__dirname,'./data.txt');
let file2 = path.resolve(__dirname,'./test.bak.txt');
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream(file2);

readStream.pipe(writeStream);
readStream.on('data',chunk => {
  
})
readStream.on('end',() => {
  console.log('done');
})