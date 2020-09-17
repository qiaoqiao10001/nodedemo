const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');
const { log } = require('console');

const { access } = require('./utils/log')

// session数据 全局的
const SESSION_DATA = {}
// 使用redis存储数据

// 获取cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}
console.log(getCookieExpires());

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
  access(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`)
  // 设置json格式返回给前端
  res.setHeader('Content-Type', 'application/json');
  const url = req.url;
  req.path = url.split('?')[0]
  // 解析query放到req上
  req.query = querystring.parse(url.split('?')[1]);


  // 解析cookie 
  req.cookie = {};
  const cookieStr = req.headers.cookie || '';
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return
    }
    const arr = item.split('=')
    const key = arr[0].trim()
    const val = arr[1].trim()
    req.cookie[key] = val;
  })


  // 解析session 
  // 判断server端有没有session

  let needSetCookie = false;

  let userId = req.cookie.userid;

  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {}
    }

  } else { // 请求中没有userid (session) 就给一个userid 存入session_data中
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    SESSION_DATA[userId] = {}
  }
  // 将req的session赋值
  req.session = SESSION_DATA[userId]

  getPostData(req).then(postData => {

    req.body = postData
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then(blogData => {
        if (needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        }
        res.end(JSON.stringify(blogData))
      })
      return
    }

    const userResult = handleUserRouter(req, res);

    if (userResult) {
      userResult.then(userData => {
        if (needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        }
        res.end(
          JSON.stringify(userData)
        )
      })
      return;
    }

    // 处理404
    res.writeHead(404, { 'Content-Type': 'text/text' })
    res.write('404 not found')
    res.end()
  }).catch(err => {
    // https://www.cnblogs.com/codebook/p/10040501.html
    // 解除node的警告
    return;
    console.log(new Error(err));
  })
}

module.exports = serverHandle;