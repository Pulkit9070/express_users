const myDB = require("./db")

const connectDB = () =>{
    try {
        myDB.authenticate();
        console.log("Databse connectwed successfully");
         
    } catch (error) {
        console.log("Connection Failed To Database",error);
        
    }
}


module.exports = connectDB;