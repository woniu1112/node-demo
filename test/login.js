
const login = require('../mysql/login')

function Login () {
  this.login = function (app) {
    app.post('/login', function (req, res, next) {
      var body = req.body
      var result = {
        code: 1,
        message: '登录成功',
        results: true
      }

      login.search(body).then(function (data) {
        if (data.length > 0) {
          if (body.password === data[0].password) {
            result.message = '登录成功'
            result.results = true
          } else {
            result.message = '用户名密码不正确'
            result.results = false
          }
        } else {
          result.message = '用户名不存在'
          result.results = false
        }
        res.json(result)
        next()
      }, function (err) {
        result.message = '服务器错误'
        result.results = err
        res.status(500)
        res.json(result)
        next()
      }).catch(function (err) {
        result.message = '服务器错误'
        result.results = err
        res.status(500)
        res.json(result)
        next()
      })
    })
  }
}

module.exports = new Login()
