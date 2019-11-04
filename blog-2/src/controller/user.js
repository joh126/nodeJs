const login = (username, password) => {
  if (username === 'hongjian' && password === '123') {
    return true
  } else {
    return false
  }
}
module.exports = {
  login
}