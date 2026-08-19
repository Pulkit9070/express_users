const fs = require("fs").promises;
const path = require("path");

const USERS_FILE_PATH = path.join(__dirname, "../../../admin.json");

async function readUsersFromFile() {
    try {
        console.log("request has reached read file Service");
        
        const data = await fs.readFile(USERS_FILE_PATH, "utf-8");
        console.log("request has completed read file service");
        
        return JSON.parse(data);
    } catch (error) {
        if (error.name === "SyntaxError") {
            const err = new Error("users.json contains invalid JSON");
            err.statusCode = 500;
            throw err;
        }
        const err = new Error("Failed to read users");
        err.statusCode = 500;
        throw err;
    }
}

async function writeUsersToFile(users, customErrorMessage = "Failed to save user") {
    try {
        console.log("request has reached write file service");
        
        await fs.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2), "utf-8");

        console.log("request has completed erite file service");
        
    } catch (error) {
        const err = new Error(customErrorMessage);
        err.statusCode = 500;
        throw err;
    }
}

module.exports = {
    readUsersFromFile,
    writeUsersToFile
};
