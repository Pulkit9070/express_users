const { DataTypes } = require("sequelize");

const myDB = require("../config/db");

const Users = myDB.define("Users", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    empCode: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    userInfo: {
        type: DataTypes.JSONB,
        allowNull: false
    }

});

module.exports = Users;