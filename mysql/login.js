const connect = require('./connection')

connect.init()

function Login () {
}

Login.prototype.search = function (data) {
  // var addSql = 'INSERT INTO user (`name`,`password`) VALUES(?,?)';
  // var delSql = 'DELETE FROM user WHERE id=?';
  var searchSql = 'SELECT * FROM user WHERE name=?'
  var addSqlParams = [data.userName]
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

module.exports = new Login()
