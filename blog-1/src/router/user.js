
const { loginCheck } = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const qs = require('querystring');


const handleUserRouter = (req, res) => {

  const method = req.method;
  // 登录
  if (method === 'GET' && req.path === '/api/user/login') {
    const {username, password} = req.query;
    const result = loginCheck(username,password);
    return result.then(data => {
      if(data.username){
        // 这里把username存入session
        req.session.username = data.username;
        req.session.realname = data.realname;
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }

  if (method === 'GET' && req.path === '/api/user/login-test') {
    if(req.session.username){
      return Promise.resolve(
        new SuccessModel({
          username: req.session.username
        })
      )
    }
    return Promise.resolve(
      new ErrorModel('尚未登录')
    )
  }

}

module.exports = handleUserRouter;