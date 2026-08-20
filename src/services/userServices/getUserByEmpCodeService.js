const { where } = require("sequelize");
const Users = require("../../models/userModel");


async function getUserByEmpCode(empCode) {
    if (!empCode) {
        const err = new Error("empCode search parameter is required");
        err.statusCode = 400;
        throw err;
    }

    const user = await Users.findOne({
        where:{empCode}
    })


    if (!user) {
        const err = new Error(`User with empCode '${empCode}' not found`);
        err.statusCode = 404;
        throw err;
    }

    return user;
}

module.exports = {
    getUserByEmpCode
};
