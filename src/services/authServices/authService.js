const {readUsersFromFile,writeUsersToFile} = require("./authfileService");
const { loginUser } = require("./loginauthService");
const { registerUser } = require("./registerAuthService");


module.exports = {
    readUsersFromFile,
    writeUsersToFile,
    registerUser,
    loginUser
};
