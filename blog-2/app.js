const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json;charset=UTF-8')

  const resData = {
    name: '红建100',
    age: 18,
    // process nodejs的全局变量， process.env.NODE_ENV = dev/pro
    env: process.env.NODE_ENV
  }

  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serverHandle
