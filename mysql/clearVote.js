const connect = require('./connection')

connect.init()

function ClearVote () {
}

ClearVote.prototype.del = function () {
  var clearSql = 'delete from vote'
  return new Promise (function (resolve, reject) {
    connect.connection.query(clearSql,[], function(err, results, fields) {
      if (err) {
        reject(err)
      }else{
        resolve(results)
      }
    })
  })
}

module.exports = new ClearVote()
