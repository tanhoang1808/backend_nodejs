const mysql = require('mysql2/promise')
require('dotenv').config()


// const connection = mysql.createConnection(
//     {host : process.env.DB_HOST,
//     user : process.env.DB_USER,
//     port : process.env.DB_PORT,
//     database : process.env.DB_NAME,
//     password : process.env.DB_PASSWORD
// }
// )

const connection = mysql.createPool(
    {
        host : process.env.DB_HOST,
        user :  process.env.DB_USER,
        database :  process.env.DB_NAME,
        waitForConnections : true,
        connectionLimit : 10,
        queueLimit : 0,
        port :  process.env.DB_PORT,
        password : process.env.DB_PASSWORD,
    }
)

module.exports = connection