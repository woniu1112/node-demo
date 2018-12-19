const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const login  = require('./test/login')

app.use(express.static('www'))
//创建application/json解析
app.use(bodyParser.json())
//创建application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(cookieParser())

// 跨域
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://localhost:8081");         //允许的来源
  res.header("Access-Control-Allow-Headers","Content-Type");    //请求的头部
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  //允许请求的方法
  res.header("Access-Control-Allow-Credentials", true);
  next()
})

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
  next()
})

// 登录接口
login.login(app)

const server = app.listen(9000, 'localhost', function () {
  var host = server.address().address
  var port = server.address().port
  console.log('访问地址：http://%s:%s', host, port)
})