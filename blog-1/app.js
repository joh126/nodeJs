const http = require("http")
const querystring = require("querystring")

// const service = http.createServer((req, res) => {
//   console.log("method: ", req.method)
//   const url = req.url
//   console.log("url: ", url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log("query: ", req.query)
//   res.end(JSON.stringify(req.query))
// })


// const service = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     // req数据格式
//     console.log('req content-type: ', req.headers['content-type']);
//     // 接收数据
//     let postData = ''
//     req.on('data', chunk => {
//       postData += chunk.toString()
//     })
//     req.on('end', () => {
//       console.log('postData: ', postData)
//       res.end('hello world')
//     })
//   }
// })

const service = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  // 设置返回格式为JSON
  res.setHeader('Content-type', 'application/json;charset=UTF-8')

  // 返回数据
  const resData = {
    method,
    url,
    path,
    query
  }

  // get基本处理
  if (method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }

  // post基本处理
  if (method === 'POST') {
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData

      // 返回
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})

service.listen(3000)
console.log('ok')
