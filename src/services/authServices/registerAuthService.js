const {readUsersFromFile,writeUsersToFile} = require("./authfileService")

const bcrypt = require("bcrypt");

async function registerUser(name,email,password){


    const users = await readUsersFromFile();
   

    const existingUser = users.find(
        user => user.email.toLowerCase() === email.toLowerCase()
    );

    if(existingUser){
        const error = new Error("Email Already Exists");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password:hashedPassword
    }

    users.push(newUser)


    await writeUsersToFile(users);
}



module.exports = {
    registerUser
}
