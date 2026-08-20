const { getAllUsers } = require("./getAllUsersService");
const { createUser } = require("./createUserService");
const { updateUser } = require("./updateUserService");
const { getUserByEmpCode } = require("./getUserByEmpCodeService");


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    getUserByEmpCode,
};
