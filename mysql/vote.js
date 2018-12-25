const connect = require('./connection')

connect.init()

function Vote () {
}

Vote.prototype.add = function (data, type) {
  var Sql = '',params = ''
  if (type === 'add') {
    Sql = 'INSERT INTO vote (`mark`,`ip`) VALUES(?,?)'
    params = [data.mark, data.ip]
  } else if (type === 'update'){
    Sql = 'UPDATE vote set mark=? where id=?'
    params = [data.mark, data.id]
  }
  // var updateSql = 'UPDATE vote set mark=? where id=?'
  // var delSql = 'DELETE FROM user WHERE id=?';
  // var searchSql = 'SELECT * FROM user WHERE name=?'
  // var searchSql = 'delete from user'
  return new Promise (function (resolve, reject) {
    connect.connection.query(Sql,params, function(err, results, fields) {
      if (err) {
        reject(err)
      }else{
        console.log(results)
        resolve(results)
      }
    })
  })
}
Vote.prototype.searchSql = function (data) {
  var searchSql = 'SELECT * FROM vote WHERE ip=?'
  var searchSqlParams = [data.ip]
  return new Promise (function (resolve, reject) {
    connect.connection.query(searchSql,searchSqlParams, function(err, results, fields) {
      if (err) {
        reject(err)
      }else{
        resolve(results)
      }
    })
  })
}

module.exports = new Vote()
