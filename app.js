const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'passpass',
    database: 'project'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
})

con.query('DESCRIBE products', (err, results, fields) => {
    console.log(results);
})