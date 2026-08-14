const { readUsersFromFile, writeUsersToFile } = require("./fileService");

async function createUser(userData) {
    const users = await readUsersFromFile();
    users.push(userData);
    await writeUsersToFile(users, "Failed to save user");
    return userData;
}

module.exports = {
    createUser
};
