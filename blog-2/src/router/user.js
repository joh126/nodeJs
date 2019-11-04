const {
  login
} = require('../controller/user')

const {
  SuccessModel,
  ErrorModel
} = require('../resModel/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录接口
  if (method === 'POST' && req.path === '/api/user/login') {
    const {
      username,
      password
    } = req.body

    const result = login(username, password)
    if (result) {
      return new SuccessModel('登录成功')
    } else {
      return new SuccessModel('登录失败')
    }
  }
}

module.exports = handleUserRouter