const connection = require( "../config/database")

const getAllUser = async () => {
    let [results,fields] = await connection.query(`SELECT * from Users`)
    return results
}

module.exports = {
    getAllUser
}