const bcrypt = require("bcrypt");
const { generateToken } = require("../../middlewares/authMiddleware");
const Admins = require("../../models/adminModel");
const { where } = require("sequelize");


async function loginUser(email,password){

    // console.log(Admins);
    


    const existingUser = await Admins.findOne({
        where:{email}
    })

    if(!existingUser){
        const error = new Error("Please enter valid Credentials");
        error.statusCode = 401;
        throw error;
    }


    const matchedPassword = await bcrypt.compare(
    password,
    existingUser.password
    );

    if (!matchedPassword) {
        const error = new Error("Please enter valid Passcredentials");
        error.statusCode = 401;
        throw error;
    }

    const userData = {
        email:email
    }

    const token = generateToken(userData);

    return token;

}


module.exports = {
    loginUser
}
