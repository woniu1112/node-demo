const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const cors = require('cors')

const login  = require('./test/login')
const vote  = require('./test/vote')
const collect  = require('./test/collect')
const clearVote  = require('./mysql/clearVote')

app.use(express.static('www'))
//创建application/json解析
app.use(bodyParser.json())
//创建application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(cookieParser())
// app.use(cors())

// 跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://192.168.98.70:8081"); //允许的来源
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Headers","Content-Type"); //请求的头部
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许请求的方法
  res.header("Access-Control-Allow-Credentials", true);
  next()
})

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
  next()
})

// 登录接口
login.login(app)
// 投票
vote.vote(app)
collect.collect(app)
// 每一小时清一次 vote 表
var times = setInterval(function () {
  clearVote.del()
}, 3600000)

const server = app.listen(9000, '192.168.98.70', function () {
  var host = server.address().address
  var port = server.address().port
  console.log('访问地址：http://%s:%s', host, port)
})