/*
 * @Author: your name
 * @Date: 2020-09-07 20:40:07
 * @LastEditTime: 2020-09-07 20:54:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /B站node/blog-1/src/router/user.js
 */
const handleUserRouter = (req,res) => {
   
  const method = req.method;
  // 登录
  if(method==='POST' && req.path === '/api/user/login'){
    return{
      msg: '登录'
    }
  }

}

module.exports = handleUserRouter;