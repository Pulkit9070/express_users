const {readUsersFromFile,writeUsersToFile} = require("./authfileService");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../middlewares/authMiddleware");


async function loginUser(email,password){

    const users = await readUsersFromFile();

    const existingUser = users.find(
        user => user.email.toLowerCase() === email.toLowerCase()
    );

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
