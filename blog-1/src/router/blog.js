const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const id = req.query.id || '';
  const method = req.method;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    // const listData = getList(keyword, author)
    // return new SuccessModel(listData)
    const result = getList(keyword, author)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const detailData = getDetail(id);
    const result = getDetail(id);
    return result.then(detailData => {
      return new SuccessModel(detailData)
    })
  }
  // 新增一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'zhansan';
    const result = newBlog(req.body);
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    // 需要传递id
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }
  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const author = 'zhansan'
    const result = deleteBlog(id, author);
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter