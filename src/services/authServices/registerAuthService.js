const { where } = require("sequelize");
const Admins = require("../../models/adminModel");

const bcrypt = require("bcrypt");

async function registerUser(name,email,password){


    const existingUser = await Admins.findOne({
        where :{email}
    })

    if(existingUser){
        const error = new Error("Email Already Exists");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await Admins.create({
        name,
        email,
        password:hashedPassword
    })

    return newUser;
    // await writeUsersToFile(users);
}



module.exports = {
    registerUser
}
