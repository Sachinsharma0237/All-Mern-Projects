const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sachin@12345",
    database:"mydatabase",
    multipleStatements:true
})

mysqlConnection.connect( (error)=>{
    if(!error){
        console.log("DataBase Connected");
    }else{
        console.log("DB connection Faied", JSON.stringify(error));
    }
})

module.exports = mysqlConnection;