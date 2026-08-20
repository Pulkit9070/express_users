const Seq = require("sequelize");

const sequalizeConn = new Seq(
    process.env.DB_Name,
    process.env.DB_USERNAME,
    process.env.DB_PASS,
    {
        host : "localhost",
        port : "5432",
        dialect : "postgres"
    }
)



module.exports = sequalizeConn;