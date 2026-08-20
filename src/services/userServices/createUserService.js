const Users = require("../../models/userModel");

async function createUser(userData) {

    const existingUser = await Users.findOne({
        where: {
            email: userData.email
        }
    });

    if (existingUser) {
        const error = new Error("User with this email already exists");
        error.statusCode = 409;
        throw error;
    }

    const newUser = await Users.create(userData);

    return newUser;
}

module.exports = {
    createUser
};