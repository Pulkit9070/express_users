const express = require("express");
require("dotenv").config();
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes")

const app = express();
const PORT = process.env.PORT ;


app.use(express.json());


app.use("/users", userRoutes);
app.use("/auth", authRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});


app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}/`);
});

module.exports = app;
