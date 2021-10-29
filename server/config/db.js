
var mysql = require('mysql');
const db = mysql.createPool({
    host : '183.111.161.71',
    user : 'ciadmin',
    password : 'qwe123qwe!',
    database : 'ciadmin'
});

module.exports = db;