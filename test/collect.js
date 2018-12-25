
const collect = require('../mysql/collect')

function Collect () {
  this.collect = function (app) {
    app.get('/collect', function (req, res, next) {
      var body = req.body
      var result = {
        code: 1,
        message: '查询成功',
        results: true
      }

      collect.search(body).then(function (data) {
        try {
          result.results = data
          res.json(result)
        } catch (e) {
          console.log(e)
        }
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

module.exports = new Collect()
