const userService = require("../services/userServices/userService");

async function getUsers(req, res) {
    try {
        // const { empCode } = req.query;
        // if (empCode) {
        //     const user = await userService.getUserByEmpCode(empCode);
        //     return res.status(200).json(user);
        // }
        const responseData = await userService.getAllUsers();
        return res.status(200).json(responseData);
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Failed to read user data"
        });
    }
}


async function getUserByEmpCode(req, res) {
    try {
        const empCode = req.params.empCode || req.query.username;
        if (!empCode) {
            return res.status(400).json({
                message: "empCode parameter is required"
            });
        }
        const user = await userService.getUserByEmpCode(empCode);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Failed to get user"
        });
    }
}

async function createUser(req, res) {
    const userData = req.body;
    if (!userData || typeof userData !== "object" || Object.keys(userData).length === 0) {
        return res.status(400).json({
            message: "Invalid or empty user data"
        });
    }

    try {
        const savedUser = await userService.createUser(userData);
        return res.status(201).json({
            message: "User Saved Successfully",
            user: savedUser
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Failed to save user"
        });
    }
}

async function updateUser(req, res) {
    const empCode = req.params.empCode;
    if (!empCode) {
        return res.status(400).json({
            message: "Employee code is required in URL path (e.g. /users/EMP102)"
        });
    }

    const updateData = req.body;
    if (!updateData || typeof updateData !== "object" || Object.keys(updateData).length === 0) {
        return res.status(400).json({
            message: "Invalid or empty update data"
        });
    }

    try {
        const updatedUser = await userService.updateUser(empCode, updateData);
        return res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Failed to update user"
        });
    }
}
module.exports = {
    getUsers,
    getUserByEmpCode,
    createUser,
    updateUser
};
