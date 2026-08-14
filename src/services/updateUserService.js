const { readUsersFromFile, writeUsersToFile } = require("./fileService");

async function updateUser(empCode, updateData) {
    const users = await readUsersFromFile();

    const existingUser = users.find(
        (user) => user.empCode && user.empCode.toLowerCase() === empCode.toLowerCase()
    );

    if (!existingUser) {
        const err = new Error("User not found");
        err.statusCode = 404;
        throw err;
    }

    if (updateData.username !== undefined) {
        existingUser.username = updateData.username;
    }

    if (updateData.email !== undefined) {
        existingUser.email = updateData.email;
    }

    if (updateData.empCode !== undefined) {
        existingUser.empCode = updateData.empCode;
    }

    if (updateData.userInfo !== undefined) {
        existingUser.userInfo = {
            ...existingUser.userInfo,
            ...updateData.userInfo
        };
    }

    await writeUsersToFile(users, "Failed to update user");
    return existingUser;
}

module.exports = {
    updateUser
};
