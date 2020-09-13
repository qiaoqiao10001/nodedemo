/*
 * @Author: your name
 * @Date: 2020-09-12 10:13:23
 * @LastEditTime: 2020-09-12 10:36:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /B站node/blog-1/server/axiosPost.js
 */
const Axios = require('axios');
const qs = require('querystring');
let data = {
  username: "lisi",
  password: "123456"
}

// Axios.post('http://localhost:8899/api/user/login',data).then(res => {
//   console.log(res);
// })

// Axios.get('http://localhost:8899/api/blog/list').then(res => {
//   console.log(res.data);
// })