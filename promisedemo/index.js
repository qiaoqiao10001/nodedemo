const path = require('path')
const fs = require('fs')
function getFileContent(filename){
  const promise = new Promise((resolve,reject) => {
    const fullPath = path.resolve(__dirname,'files',filename);
    fs.readFile(fullPath,(err,data) => {
      if(err){
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise;
}
getFileContent('a.json').then(data => {
  console.log(data);
  return getFileContent(data.name);
}).then(data2 => {
  console.log(data2);
  return getFileContent(data2.name);
}).then(cdata => {
  console.log(cdata);
})