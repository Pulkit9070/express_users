const myDB = require("./db");

const connectDB = async () => {
    try {
        await myDB.authenticate();

        console.log("Database connected successfully");

        await myDB.sync();

        console.log("Database synchronized successfully",process.env.DB_Name);

    } catch (error) {
        console.log("Connection Failed To Database", error);
    }
};

module.exports = connectDB;