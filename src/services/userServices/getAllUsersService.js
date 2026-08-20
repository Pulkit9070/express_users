const Users = require("../../models/userModel");


async function getAllUsers() {
    const users = await Users.findAll()
    return users.map(user => ({
        id: user.id,
        username: user.username,
        empCode: user.empCode,
        department: user.userInfo ? user.userInfo.department : undefined,
        city: user.userInfo ? user.userInfo.city : undefined
    }));
}

module.exports = {
    getAllUsers
};
