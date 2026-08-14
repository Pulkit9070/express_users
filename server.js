const express = require("express");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

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
