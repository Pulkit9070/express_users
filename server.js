const express = require("express");
require("dotenv").config();
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// const authenticator = (req,res,next) =>{
//     const reqBody = req.body;
//     if(reqBody.username){
//         console.log("user is authenticated");
//         next();
        
//     }
//     res.status(401).json({
//         message: "Unauthorized Errror"
//     })
// }

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Express Users API is running",
        endpoints: {
            getAllUsers: "GET /users",
            searchByQuery: "GET /users?empCode=EMP102",
            getUserByEmpCode: "GET /users/:empCode",
            createUser: "POST /users",
            updateUser: "PUT /users/:empCode"
        }
    });
});


app.use("/users", userRoutes);
app.use("/auth", authRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});


app.use((err, req, res, next) => {
    console.error("Error occurred:", err.message);
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({ message: "Invalid JSON" });
    }
    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json({
        message: err.message || "Internal Server Error"
    });
});

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}/`);
});

module.exports = app;
