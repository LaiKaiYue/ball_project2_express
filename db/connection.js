/**
 * Created by USER on 2017/5/2.
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Yue.810810',
    database : 'jiawei'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;