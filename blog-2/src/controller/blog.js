/**
 * 处理业务逻辑代码
 */
const getList = (author, keyword) => {
  // 先返回假数据(格式是正确的)
  return [{
    id: 1,
    title: '我是假数据1',
    author: 'hongjian',
    createTime: 1572876844265
  }, {
    id: 2,
    title: '我是假数据2',
    author: 'hongjian',
    createTime: 1572876851928
  }]
}

const getDetail = (id) => {
  // 先返回假数据(格式是正确的)
  return [{
    id: 1,
    title: '我是假数据1',
    author: 'hongjian',
    createTime: 1572876844265
  }]
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含title cotnent 属性
  console.log('new blogData ... ', blogData)
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  // blogData 是一个博客对象，包含title cotnent 属性
  console.log('update blogData ... ', blogData)
  return true
}

const delBlog = (id) => {
  // blogData 是一个博客对象，包含title cotnent 属性
  return {
    id: 1
  }
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}