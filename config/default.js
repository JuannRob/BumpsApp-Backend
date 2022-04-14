require('dotenv').config();
module.exports = {
    database: {
        mongodb: {
            connectionString: process.env.CONNECTION_STRING,
            password: process.env.PW_DB,
        }
    }
}