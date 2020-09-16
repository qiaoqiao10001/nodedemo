ES:

- 只是定义了语法，不能监听click事件，不能发ajax请求
- 不能处理HTTP请求，不能操作操作文件
-

JS：

- 使用的es语法规范，外加web api;
- dom bom ajax
- 两者结合才能完成浏览器端的操作

### nodejs:

- 使用es语法规范，外加node API
- 处理HTTP请求，文件等
- 两者结合完成server端的操作

### 思维区别

- 服务稳定性
- 考虑内存和CPU
- 日志记录
- 安全
- 集群和服务拆分

1. server端可能会受到恶意攻击和误操作
2. 单个客户端可以意外挂掉，但是服务端不能；（稳定性）
3. pm2做进程守候
4. 客户端独占一个浏览器，内存CPU不是问题
5. server端要承载很多请求，CPU和内存都是稀缺资源
6. stream写日志，Redis存session
7. 前端也会参与写日志，是日志发起方
8. server端要写日志，存储日志，分析日志，前端不关心
9. 越权操作，数据库攻击等
10. 登录验证，预防xss,和SQL注入
11. 产品发展速度快，流量会迅速增加
12. 扩展机器和服务拆分来承载大流量

## 博客系统功能

- 首页，作者页，博客详情页
- 登录页
- 管理中心，新建页面，编辑页面

#### 数据存储

博客表


| id | title | content | createtime | author |
| - | - | - | - | - |
| 1 | 1 |   |   |   |
| 2 | 2 |   |   |   |

用户表


| id | username | pwd | realname |
| - | - | - | - |
| 1 | zhangsan | 123 | 张三 |
| 2 | lisi | 123 | 李四 |

#### 接口设计


| 描述 | 接口 | 方法 | URL参数 | 备注 |
| - | - | - | - | - |
| 获取博客列表 | /api/blog/list | get | author,keyword | 参数为空不查询 |
| 获取一篇博客内容 | /api/blog/detail | get | id |   |
| 新增一篇博客 | /api/blog/new | post |   | post新增信息 |
| 更新一篇博客 | /api/blog/update | post | id | postData |
| 删除 | /api/blog/del | post | id |   |
| 登录 | /api/user/login | post |   |   |

#### node 处理http请求

- get请求和querystring

```js
  req.url = querystring.parse(url.split('?')[1])  // 解析url查询字符串
```

- post请求和postdata


- 联调的时候需要使用浏览器   因为cookie跨域不共享
- 使用Nginx做反向代理： 访问某个端口的时候代理带Nginx设置的后端端口上
- 反向代理： 对客户端不可见的代理，服务端相当于一个黑盒




- QPS 峰值访问量
- 日志记录
- server端日志：
  1. 访问日志 Access log
  2. 自定义日志（包括自定义事件，错误记录）：更多是业务上的日志
- 怎么记录日志？
- nodejs  文件操作



### IO操作的瓶颈

- 网络IO
- 文件IO
