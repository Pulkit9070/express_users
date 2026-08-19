const { readUsersFromFile } = require("./fileService");

async function getUserByEmpCode(empCode) {
    if (!empCode) {
        const err = new Error("empCode search parameter is required");
        err.statusCode = 400;
        throw err;
    }

    const users = await readUsersFromFile();

    const user = users.find(
        (u) => u.empCode && u.empCode.toLowerCase() === empCode.trim().toLowerCase()
    );

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
