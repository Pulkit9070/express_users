const { getAllUsers } = require("./getAllUsersService");
const { createUser } = require("./createUserService");
const { updateUser } = require("./updateUserService");
const { getUserByEmpCode } = require("./getUserByEmpCodeService");
const { readUsersFromFile, writeUsersToFile } = require("./fileService");

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    getUserByEmpCode,
    readUsersFromFile,
    writeUsersToFile
};

