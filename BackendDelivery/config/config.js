const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jmateor11099',
    database: 'delivery'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

module.exports = db;