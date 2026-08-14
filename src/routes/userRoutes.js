const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/", userController.getUsers);


router.get("/:empCode", userController.getUserByEmpCode);


router.post("/", userController.createUser);


router.put("/:empCode", userController.updateUser);



module.exports = router;
