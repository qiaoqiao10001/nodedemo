const redis = require('redis');

const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.on('error', err => {
  console.log(err);
})

// 测试
redisClient.set('myname', 'qiaoqiao', redis.print);
redisClient.get('myname', (err, val) => {
  if (err) { throw new Error(err); return; }
  console.log('my name is ', val);
  redisClient.quit();
})
