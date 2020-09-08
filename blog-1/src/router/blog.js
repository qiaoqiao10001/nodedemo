const { getList,getDetail,newBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {

  const method = req.method;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(keyword, author)

    return new SuccessModel(listData)
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || '';
    const detailData = getDetail(id);
    return new SuccessModel(detailData)
  }
  // 新增一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    debugger
    const data = newBlog(req.body)
    console.log('newBlog(req.body)',data);
    return new SuccessModel(data)
  }
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: 'update详情'
    }
  }
  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: 'delete 详情'
    }
  }
}

module.exports = handleBlogRouter