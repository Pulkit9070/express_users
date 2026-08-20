const Users = require("../../models/userModel");

async function updateUser(empCode, updateData) {

    const existingUser = await Users.findOne({
        where: {
            empCode
        }
    });

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

    await existingUser.save();

    return existingUser;
}

module.exports = {
    updateUser
};