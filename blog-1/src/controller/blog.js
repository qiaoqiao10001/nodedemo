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
  // blogData是一个博客对象数据，包括title content 属性
  return {
    blogData,
    id: 3
  }
}

const updateBlog = (id, blogData={}) => {
  // blogData是一个博客对象数据，包括title content 属性
  return true;// 更新成功
}

const deleteBlog = (id) => {
  return true;
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}