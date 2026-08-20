const {DataTypes} = require("sequelize");

const myDB = require("../config/db");


const Admins = myDB.define('Admins',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name:{
        type: DataTypes.STRING,
        allowNull:false
    },

    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Admins;