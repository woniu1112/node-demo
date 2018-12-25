const vote = require('../mysql/vote')

function Vote () {
  this.vote = function (app) {
    app.post('/vote', function (req, res, next) {
      var body = req.body
      var result = {
        code: 1,
        message: '打分成功',
        results: true
      }
      var obj = {
        mark: body.mark,
        ip: req.socket.remoteAddress
      }
      vote.searchSql(obj).then(function (data) {
        if (data.length > 0 && obj.ip === data[0].ip) {
          obj.id = data[0].id
          vote.add(obj, 'update').then(function (data) {
            result.message = '修改分数成功！'
            result.results = true
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
        } else {
          vote.add(obj, 'add').then(function (data) {
            result.message = '打分成功！'
            result.results = true
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
        }
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

module.exports = new Vote()