/**
 * 系统基本设置
 */
const querystring = require('querystring')
const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')

// 用于处理post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      return resolve({})
    }

    if (req.headers['content-type'] !== 'application/json') {
      return resolve({})
    }

    let postData = ''
    req.on('data', chunk => {
      postData += chunk
    })

    req.on('end', () => {
      if (!postData) {
        return resolve({})
      }
      resolve(
        JSON.parse(postData)
      )
    })

  })
  return promise
}

const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json;charset=UTF-8')

  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

  // 处理post data
  getPostData(req).then((postData) => {
    console.log(postData)
    req.body = postData

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(
        JSON.stringify(blogData)
      )
      return
    }

    // 处理 user 路由
    const userData = handleUserRouter(req, req)
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }

    // 未命中路由 返回 404 纯文本
    res.writeHead('404', {
      'Content-type': 'text/plain'
    })
    res.write('404 Not Found\n')
    res.end()
  })
}

module.exports = serverHandle