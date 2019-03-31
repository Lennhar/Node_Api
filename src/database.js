//objeto de conexión
const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'company',
    port:'3307'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db id connected');
    }
});
//Exportamos el modulo
module.exports = mysqlConnection;