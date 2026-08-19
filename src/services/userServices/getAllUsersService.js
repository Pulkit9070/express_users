const { readUsersFromFile } = require("./fileService");

async function getAllUsers() {
    const users = await readUsersFromFile();
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
