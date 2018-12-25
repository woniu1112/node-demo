const mysql = require('mysql')

function Connect () {
  this.host = 'localhost'
  this.user = 'root'
  this.port = '3306'
  this.password = 'QWer!123456'
  this.database = 'test'
  this.connection = {}
}
Connect.prototype.init = function () {
  this.connection = mysql.createConnection({
    host: this.host,
    user: this.user,
    port: this.port,
    password: this.password,
    database: this.database
  })
  this.connection.connect(function (err) {
    // console.log(err)
  });
}

module.exports = new Connect()
