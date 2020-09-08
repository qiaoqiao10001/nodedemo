const getList = (keyword, author) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容1',
      createTime: Date.now(),
      author: '张三'
    },
    {
      id: 2,
      title: '标题A',
      content: '内容1',
      createTime: Date.now(),
      author: '李四'
    }
  ]
}

const getDetail = (id) => {
  // 根据id获取详情
  return{
    id: 2,
    title: '标题A',
    content: '内容1',
    createTime: Date.now(),
    author: '张三'
  }
}

const newBlog = (blogData = {}) => {
  return {
    blogData,
    id: 3
  }
}

module.exports = {
  getList,
  getDetail,
  newBlog
}