const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');

const getPostData = (req) => {     // 处理post过来的数据
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({})
      return;
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return;
    }

    let postData = '';
    req.on('data', chunks => {
      postData += chunks.toString();
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return;
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise;
}

const serverHandle = (req, res) => {
  // 设置json格式返回给前端
  res.setHeader('Content-Type', 'application/json');
  const url = req.url;
  req.path = url.split('?')[0]
  // 解析query放到req上
  req.query = querystring.parse(url.split('?')[1]);

  getPostData(req).then(postData => {
    req.body = postData
    const blogData = handleBlogRouter(req, res);
    const userData = handleUserRouter(req, res);

    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    if (userData) {
      res.end(JSON.stringify(userData))
    }

    // 处理404
    res.writeHead(404, { 'Content-Type': 'text/text' })
    res.write('404 not found')
    res.end()
  })
}

module.exports = serverHandle;