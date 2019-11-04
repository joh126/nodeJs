/**
 * 只管路由跳转
 */
const {
  SuccessModel,
  ErrorModel
} = require('../resModel/resModel')

const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')


const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {

    const author = req.query.author
    const keyword = req.query.keyword
    const listData = getList(author, keyword)

    if (listData) {
      return new SuccessModel(listData)
    }
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    let data = getDetail(id)
    if (data) {
      return new SuccessModel(data)
    }
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body)
    if (data) {
      return new SuccessModel(data)
    }
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('博客更新失败')
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = delBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('博客删除失败')
    }
    return {
      msg: '这是删除博客的接口'
    }
  }

}

module.exports = handleBlogRouter