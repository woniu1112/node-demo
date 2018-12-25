const connect = require('./connection')

connect.init()

function Collect () {
}

Collect.prototype.search = function (data) {
  var searchSql = 'SELECT id, mark FROM vote'
  var addSqlParams = []
  return new Promise (function (resolve, reject) {
    connect.connection.query(searchSql,addSqlParams, function(err, results, fields) {
      if (err) {
        reject(err)
      }else{
        resolve(results)
      }
    })
  })
}

module.exports = new Collect()
