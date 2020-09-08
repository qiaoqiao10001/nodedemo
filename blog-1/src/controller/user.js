const loginCheck = (username, password) => {
  if (username === 'zhangsan' && password === '123456') {
    return true;
  } else {
    return false;
  }
}
module.exports = {
  loginCheck
};