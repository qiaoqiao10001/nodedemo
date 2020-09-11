
const { exec } = require('../db/mysql')



const getList = (keyword, author) => {
  let sql = 'select * from blogs where 1=1 '
  if (author) {
    sql += `and author = '${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  return exec(sql);
}

const getDetail = (id) => {
  // 根据id获取详情
  const sql = `select * from blogs where id=${id}`
  return exec(sql).then(rows => {
    return rows[0]
  })

}

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象数据，包括title content 属性
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createTime = Date.now();

  const sql = `insert into blogs (title, content, createTime, author) 
  values ('${title}','${content}','${createTime}','${author}')`;
  return exec(sql).then(insertData => { 
    console.log(insertData,'insertDatainsertData');
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  // blogData是一个博客对象数据，包括title content 属性
  const title = blogData.title;
  const content = blogData.content;

  const sql =  `update blogs set title='${title}', content='${content}' where id=${id}`;
  return exec(sql).then(updateData => {
    if(updateData.affectedRows>0){
      return true;
    }
    return false;
  })
  //return true;// 更新成功
 
}

const deleteBlog = (id, author) => {
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(deldata => {
    if(deldata.affectedRows>0){
      return true;
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}